import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { username } = useParams(); // Changed from userid to username
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        
        // Simulate API call with the username
        const mockUser = {
          username: username,
          name: username.charAt(0).toUpperCase() + username.slice(1), // Capitalize first letter
          email: `${username}@example.com`,
          joinDate: new Date().toLocaleDateString(),
          bio: `Hi, I'm ${username}. Welcome to my profile!`,
          stats: {
            posts: Math.floor(Math.random() * 100),
            followers: Math.floor(Math.random() * 1000),
            following: Math.floor(Math.random() * 500)
          }
        };

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setUser(mockUser);
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        <span className="ml-3">Loading {username}'s profile...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-8 px-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
            <span className="text-orange-500 text-4xl">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white">{user.name}</h1>
          <p className="text-orange-100 mt-2">@{user.username}</p>
          <p className="text-white mt-1">Joined {user.joinDate}</p>
        </div>
        
        {/* Profile Details */}
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-600">{user.bio}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold text-lg">{user.stats.posts}</p>
              <p className="text-gray-600">Posts</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold text-lg">{user.stats.followers}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold text-lg">{user.stats.following}</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-3">✉️</span>
              <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                {user.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;






