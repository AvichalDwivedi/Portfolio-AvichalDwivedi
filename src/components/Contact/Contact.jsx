// src/components/Contact/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Get in Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 text-gray-500">📍</span>
              <div>
                <h3 className="font-medium">Residency</h3>
                <p className="text-gray-600">Lucknow,Uttar Pradesh</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="mr-3 text-gray-500">📞</span>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+91 955595XXXX</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="mr-3 text-gray-500">✉️</span>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">avichaldwivedi2530@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="mr-3 text-gray-500">🕒</span>
              <div>
                <h3 className="font-medium">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Send Us a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-orange-600">Find Us on Map</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden">
          {/* In a real app, you would embed a Google Map here */}
          <div className="w-full h-64 flex items-center justify-center text-gray-500">
            <p>Google Maps would appear here in a production app</p>
          </div>
        </div>
      </div>
    </div>
  );
}