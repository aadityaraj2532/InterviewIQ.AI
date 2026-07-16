import React from 'react'
import { BsRobot, BsLinkedin, BsTwitter, BsGithub, BsEnvelope } from 'react-icons/bs'

function Footer() {
    return (
        <footer className='bg-white border-t border-gray-200 py-12'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='grid md:grid-cols-4 gap-8 mb-8'>
                    {/* Brand */}
                    <div className='md:col-span-1'>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='bg-black text-white p-2 rounded-lg'>
                                <BsRobot size={18} />
                            </div>
                            <h3 className='font-semibold text-lg'>InterviewIQ.AI</h3>
                        </div>
                        <p className='text-gray-500 text-sm'>
                            AI-powered mock interviews to help you prepare for your dream job.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className='font-semibold mb-4'>Product</h4>
                        <ul className='space-y-2 text-sm text-gray-500'>
                            <li><a href='#' className='hover:text-gray-900 transition'>Features</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Pricing</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Interview Modes</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>API</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className='font-semibold mb-4'>Company</h4>
                        <ul className='space-y-2 text-sm text-gray-500'>
                            <li><a href='#' className='hover:text-gray-900 transition'>About</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Blog</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Careers</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className='font-semibold mb-4'>Legal</h4>
                        <ul className='space-y-2 text-sm text-gray-500'>
                            <li><a href='#' className='hover:text-gray-900 transition'>Privacy Policy</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Terms of Service</a></li>
                            <li><a href='#' className='hover:text-gray-900 transition'>Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-500 text-sm'>
                        © 2024 InterviewIQ.AI. All rights reserved.
                    </p>
                    <div className='flex items-center gap-4'>
                        <a href='#' className='text-gray-500 hover:text-gray-900 transition'>
                            <BsLinkedin size={20} />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-gray-900 transition'>
                            <BsTwitter size={20} />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-gray-900 transition'>
                            <BsGithub size={20} />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-gray-900 transition'>
                            <BsEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
