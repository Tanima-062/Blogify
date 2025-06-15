import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-slate-100 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Blogify</h1>
        <p className="text-gray-500 text-lg">Your place to read, write, and connect with minds.</p>

        <a href="/auth/google/redirect">
          <button
            type="button"
            className="mt-6 flex items-center justify-center w-full space-x-3 px-6 py-3 bg-white border border-gray-300 rounded-md shadow hover:shadow-lg transition"
          >
            {/* Google SVG Icon */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285f4"
                d="M533.5 278.4c0-17.5-1.5-34.3-4.5-50.7H272v95.9h147.1c-6.3 33.7-25.4 62.3-54.3 81.4v67.6h87.7c51.3-47.3 80.1-116.8 80.1-194.2z"
              />
              <path
                fill="#34a853"
                d="M272 544.3c73.6 0 135.4-24.4 180.6-66.3l-87.7-67.6c-24.3 16.3-55.2 25.9-92.9 25.9-71.4 0-131.9-48.2-153.5-112.8H28.1v70.9c45.3 89 137.8 149.9 243.9 149.9z"
              />
              <path
                fill="#fbbc05"
                d="M118.5 323.5c-10.9-32.5-10.9-67.7 0-100.2V152.4H28.1c-36.3 70.6-36.3 154.3 0 224.9l90.4-53.8z"
              />
              <path
                fill="#ea4335"
                d="M272 107.7c39.7 0 75.4 13.7 103.5 40.6l77.5-77.5C406.9 24.4 345.2 0 272 0 166 0 73.5 60.9 28.1 150.9l90.4 70.9c21.6-64.6 82-112.8 153.5-112.8z"
              />
            </svg>
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button>
        </a>
      </div>
    </div>
  );
}
