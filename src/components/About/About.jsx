


import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    const projects = [
        {
            title: "Stock Market Portfolio App",
            description: "A real-time stock tracking application with portfolio management, historical data analysis, and personalized alerts. Built with React for the frontend, Node.js/Express for the backend, and MongoDB for storing user portfolios and watchlists.",
            features: [
                "Real-time stock data integration",
                "Interactive charts with Chart.js",
                "User authentication & portfolio tracking",
                "Custom alert system"
            ],
            tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "JWT"]
        },
        {
            title: "Hospital Management System",
            description: "Comprehensive hospital management solution for patient records, appointments, and inventory. Features role-based access for doctors, admin, and patients with secure data handling.",
            features: [
                "Patient record management",
                "Appointment scheduling",
                "Prescription tracking",
                "Inventory management"
            ],
            tech: ["React", "Redux", "Node.js", "MongoDB", "Express", "Material-UI"]
        },
        {
            title: "Social Media Platform",
            description: "A full-featured social network with posts, comments, likes, and real-time notifications. Includes user profiles, friend connections, and content moderation tools.",
            features: [
                "Real-time updates with Socket.io",
                "Image/video upload with Cloudinary",
                "Infinite scroll feed",
                "User authentication & authorization"
            ],
            tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Cloudinary"]
        },
        {
            title: "CrowdFundRaiser Platform",
            description: "A Kickstarter-like platform for creative projects with secure payments, progress tracking, and backer rewards system. Includes admin dashboard for campaign moderation.",
            features: [
                "Stripe payment integration",
                "Project milestone tracking",
                "Backer reward tiers",
                "Admin moderation panel"
            ],
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Tailwind CSS"]
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Personal Introduction Section */}
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Left Image - React Illustration */}
                        {/* <div className="lg:w-1/3 flex justify-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                                alt="React logo"
                                className="w-full max-w-xs h-auto"
                            />
                        </div> */}
                        <div className="lg:w-1/3 flex justify-center">
                        <img
                        src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                        alt="Web development illustration"
                        className="w-full max-w-xs h-auto rounded-lg shadow-md"
                        />
                        </div>

                        {/* Content */}
                        <div className="lg:w-1/3 text-center lg:text-left">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Web Development by Avichal Dwivedi
                            </h2>
                            <p className="mt-6 text-gray-600">
                                Hi, I'm <span className="font-semibold text-gray-800">Avichal Dwivedi</span>, a passionate MERN stack developer dedicated to creating exceptional web experiences. With expertise in modern JavaScript ecosystems, I build performant and accessible web applications.
                            </p>
                            <p className="mt-4 text-gray-600">
                                My approach combines clean code principles with cutting-edge technologies to deliver maintainable and scalable solutions that users love.
                            </p>
                        </div>

                        {/* Right Image - Coding Illustration */}
                        <div className="lg:w-1/3 flex justify-center">
                            <img
                                src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                                alt="Developer coding illustration"
                                className="w-full max-w-xs h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Showcase Section */}
            <div className="py-16">
                <div className="container m-auto px-6 md:px-12 xl:px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">My MERN Stack Projects</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Here are some of my notable projects built with MongoDB, Express, React, and Node.js
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">{project.description}</p>
                                </div>
                                
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        {project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="mt-6">
                                    <Link
                                        to="/projects"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                                    >
                                        View Project Details
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-center md:px-12">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Ready to Build Something Amazing?</h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Whether you need a web application, consultation, or technical expertise, I'd love to hear about your project.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-lg"
                        >
                            Get In Touch
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}






