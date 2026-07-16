# InterviewIQ.AI

AI-powered mock interview platform to help you prepare for your dream job with smart follow-ups, adaptive difficulty, and real-time performance evaluation.

## Features

- **AI-Powered Interviews**: Role-based mock interviews with intelligent question generation
- **Smart Voice Interview**: Dynamic follow-up questions based on your answers
- **Multiple Interview Modes**: HR, Technical, Confidence Detection, and more
- **Real-time Evaluation**: AI scores communication, technical accuracy, and confidence
- **Resume-Based Questions**: Project-specific questions tailored to your skills
- **PDF Reports**: Detailed strengths, weaknesses, and improvement insights
- **History & Analytics**: Track your progress over time
- **Credit System**: Earn credits and unlock premium features

## Tech Stack

### Frontend
- React 18
- Vite
- Redux Toolkit (state management)
- React Router DOM (routing)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Firebase (authentication)
- Axios (API calls)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (authentication)
- Multer (file uploads)
- OpenRouter API (AI integration)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/aadityaraj2532/InterviewIQ.AI.git
cd InterviewIQ.AI
```

### Client Setup
```bash
cd client
npm install
```

### Server Setup
```bash
cd server
npm install
```

## Environment Variables

### Client (.env)
Create a `.env` file in the `client` directory:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_FIREBASE_AUTHDOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECTID=your_firebase_project_id
VITE_FIREBASE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_FIREBASE_APPID=your_firebase_app_id
```

### Server (.env)
Create a `.env` file in the `server` directory:
```env
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
```

## Running the Project

### Start MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas connection string.

### Start the Server
```bash
cd server
npm run dev
```
Server will run on `http://localhost:8080`

### Start the Client
```bash
cd client
npm run dev
```
Client will run on `http://localhost:5174`

## Project Structure

```
InterviewIQ.AI/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images and media files
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Step1SetUp.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   └── Step3Report.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   └── InterviewReport.jsx
│   │   ├── redux/           # Redux store and slices
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/           # Utility functions
│   │   │   └── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── config/              # Configuration files
│   │   ├── db.js
│   │   └── token.js
│   ├── controllers/         # Route controllers
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   └── user.controller.js
│   ├── middlewares/         # Custom middlewares
│   │   ├── isAuth.js
│   │   └── multer.js
│   ├── model/               # Database models
│   │   ├── user.model.js
│   │   └── interview.model.js
│   ├── routes/              # API routes
│   │   ├── auth.router.js
│   │   ├── interview.route.js
│   │   └── user.route.js
│   ├── services/            # External services
│   │   └── openRouter.service.js
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/google` - Google authentication
- `GET /api/auth/logout` - Logout user

### User
- `GET /api/user/current-user` - Get current user
- `GET /api/user/:id` - Get user by ID

### Interview
- `POST /api/interview/start` - Start new interview
- `POST /api/interview/answer` - Submit answer
- `GET /api/interview/:id` - Get interview by ID
- `GET /api/interview/user/:userId` - Get user interviews

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any queries, please reach out to:
- GitHub: [@aadityaraj2532](https://github.com/aadityaraj2532)
