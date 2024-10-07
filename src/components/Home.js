import React from 'react';

function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Welcome to the Home page of this simple React app!
          </p>
        </div>
      );
}

export default Home;
