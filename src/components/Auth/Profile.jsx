import React from 'react';

export default function Profile() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-700">Name:</h3>
                    <p className="text-gray-600">John Doe</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Email:</h3>
                    <p className="text-gray-600">john@example.com</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">Member Since:</h3>
                    <p className="text-gray-600">January 2023</p>
                </div>
            </div>
        </div>
    );
}