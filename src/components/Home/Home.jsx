import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [downloads, setDownloads] = useState(1363);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (downloads < 1500) {
      const timer = setTimeout(() => {
        setDownloads(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [downloads]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:py-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-b-3xl">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-16 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="max-w-2xl space-y-8 text-center lg:text-left">
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
                Build Amazing Web Apps
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700">
                With Modern Technologies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  className="inline-flex items-center justify-center px-8 py-4 font-medium bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-300/50 text-lg"
                  to="/contact"
                >
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="mr-2"
                  >
                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                  </svg>
                  Get Started
                </Link>
                
                <div className="flex items-center justify-center bg-white px-6 py-4 rounded-xl shadow-md">
                  <span className="text-orange-600 font-bold text-xl">{downloads}+</span>
                  <span className="ml-2 text-gray-600">Downloads</span>
                </div>
              </div>
            </div>

            {/* Image */}
            {/* <div className="relative w-full lg:w-1/2 flex justify-center">
              <img 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float" 
                src="https://i.ibb.co/5BCcDYB/Remote2.png" 
                alt="Web Development Illustration" 
                style={{
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </div> */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
            <img 
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float" 
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" 
            alt="Web Development Illustration" 
            style={{
            animation: 'float 6s ease-in-out infinite'
            }}
            />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver cutting-edge web applications with exceptional user experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Blazing Fast',
                description: 'Optimized performance for seamless user interactions'
              },
              {
                icon: '🎨',
                title: 'Beautiful UI',
                description: 'Modern, clean designs that engage your audience'
              },
              {
                icon: '🛡️',
                title: 'Secure',
                description: 'Built with security best practices from the ground up'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-orange-100 flex items-center justify-center p-8">
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-orange-300">
                <span className="text-7xl">👨‍💻</span>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Avichal Dwivedi</h2>
              <h3 className="text-xl text-orange-600 mb-6">Full Stack Web Developer</h3>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  I specialize in creating modern, responsive web applications using cutting-edge technologies. 
                  With expertise across the full stack, I build solutions that are both powerful and user-friendly.
                </p>
                <p className="text-lg">
                  My focus is on writing clean, maintainable code while delivering exceptional user experiences 
                  that drive engagement and business growth.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['React', 'Node.js', 'JavaScript', 'Next.js', 'MongoDB', 'Express','Tailwind CSS'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-10 flex gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-lg"
                >
                  Contact Me
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition text-lg"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





