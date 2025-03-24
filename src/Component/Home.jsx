import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4 mt-4">Welcome to My Website</h1>
      <p className="text-lg text-center max-w-2xl">
        This is a simple home page built with React and TailwindCSS. Explore our projects, learn more about us, and get in touch!
      </p>
      <div className="mt-6">
        <a
          href="/project"
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
      
      </div>
    </div>
  );
}

export default Home;
