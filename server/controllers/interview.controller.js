import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { askAi } from "../services/openRouter.service.js";

export const analyzeResume = async (req, res) => {
    const filePath = req.file?.path;

    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Resume is required.",
            });
        }

        // Read uploaded PDF
        const fileBuffer = await fs.promises.readFile(filePath);
        const uint8Array = new Uint8Array(fileBuffer);

        // Load PDF
        const pdf = await pdfjsLib.getDocument({
            data: uint8Array,
        }).promise;

        let resumeText = "";

        // Extract text from all pages
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);

            const textContent = await page.getTextContent();

            const pageText = textContent.items
                .map((item) => item.str)
                .join(" ");

            resumeText += pageText + "\n";
        }

        // AI Prompt
        const messages = [
            {
                role: "system",
                content: `
You are an AI resume parser.

Extract structured data from the resume.

Return ONLY valid JSON in the following format:

{
  "role": "string",
  "experience": "string",
  "projects": ["project1", "project2"],
  "skills": ["skill1", "skill2"]
}

Rules:
- Return only JSON.
- Do not wrap the JSON in markdown.
- If any field is missing, return "" or [].
`,
            },
            {
                role: "user",
                content: resumeText,
            },
        ];

        // Ask AI
        const aiResponse = await askAi(messages);

        // Remove markdown if AI returns it
        const cleanResponse = aiResponse
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsed = JSON.parse(cleanResponse);

        return res.status(200).json({
            success: true,
            role: parsed.role,
            experience: parsed.experience,
            projects: parsed.projects,
            skills: parsed.skills,
            resumeText,
        });
    } catch (error) {
        console.error("Resume Analysis Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to analyze resume.",
            error: error.message,
        });
    } finally {
        // Delete uploaded file
        if (filePath) {
            try {
                await fs.promises.unlink(filePath);
            } catch (err) {
                console.error("Failed to delete file:", err.message);
            }
        }
    }
};