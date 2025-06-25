import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    const userBio = "Full Stack Web Developer"; // Setting custom bio
    const userLocation = "Lucknow"; // Setting custom location

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden'>
                <div className='md:flex'>
                    <div className='md:flex-shrink-0 p-8'>
                        <img 
                            className='h-48 w-48 rounded-full border-4 border-indigo-500 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300' 
                            src={data.avatar_url} 
                            alt={`${data.name || data.login}'s avatar`} 
                        />
                        <div className='mt-4 flex justify-center md:justify-start space-x-4'>
                            <a href={`https://github.com/${data.login}?tab=followers`} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
                                <span className='font-bold text-white'>{data.followers}</span> Followers
                            </a>
                            <a href={`https://github.com/${data.login}?tab=following`} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
                                <span className='font-bold text-white'>{data.following}</span> Following
                            </a>
                        </div>
                    </div>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm text-indigo-400 font-semibold'>
                            GitHub Profile
                        </div>
                        <h1 className='block mt-1 text-2xl font-medium text-white'>
                            {data.name || data.login}
                        </h1>
                        <p className='mt-2 text-gray-300'>{userBio}</p>
                        
                        <div className='mt-6 grid grid-cols-2 gap-4'>
                            <div className='bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300'>
                                <p className='text-sm font-medium text-gray-400'>Public Repos</p>
                                <a 
                                    href={`https://github.com/${data.login}?tab=repositories`} 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className='text-2xl font-bold text-indigo-400 hover:text-indigo-300'
                                >
                                    {data.public_repos}
                                </a>
                            </div>
                            <div className='bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300'>
                                <p className='text-sm font-medium text-gray-400'>Public Gists</p>
                                <p className='text-2xl font-bold text-indigo-400'>{data.public_gists}</p>
                            </div>
                            <div className='bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300'>
                                <p className='text-sm font-medium text-gray-400'>Location</p>
                                <p className='text-xl font-medium text-white'>{userLocation}</p>
                            </div>
                            <div className='bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300'>
                                <p className='text-sm font-medium text-gray-400'>Member Since</p>
                                <p className='text-xl font-medium text-white'>
                                    {new Date(data.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        
                        <div className='mt-8 flex flex-wrap gap-4'>
                            <a 
                                href={`https://github.com/${data.login}`} 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300'
                            >
                                <svg className='w-5 h-5 mr-2' fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                Visit Profile
                            </a>
                            {data.blog && (
                                <a 
                                    href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`} 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-300'
                                >
                                    <svg className='w-5 h-5 mr-2' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                    Portfolio
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className='px-8 py-4 bg-gray-700 flex justify-end'>
                    <div className='flex space-x-4'>
                        <a href={`https://twitter.com/${data.twitter_username}`} target='_blank' rel='noopener noreferrer' className={`text-gray-400 hover:text-blue-400 ${!data.twitter_username && 'hidden'}`}>
                            <span className='sr-only'>Twitter</span>
                            <svg className='h-6 w-6' fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href={`mailto:${data.email}`} target='_blank' rel='noopener noreferrer' className={`text-gray-400 hover:text-red-400 ${!data.email && 'hidden'}`}>
                            <span className='sr-only'>Email</span>
                            <svg className='h-6 w-6' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AvichalDwivedi');
    return response.json();
};



