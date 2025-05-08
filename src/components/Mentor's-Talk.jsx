import React from "react";

const Query = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[35rem] bg-white shadow-2xl border border-gray-300 rounded-2xl p-8 transform hover:scale-[1.02] transition duration-300 ease-in-out">
        <h2 className="text-[43px] text-center mb-8 font-[emoji] text-navy-800">
          Welcome To Login Page
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              placeholder="Enter the username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              required
              placeholder="Enter the password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline block">
            Forgot Password?
          </a>
          <p className="mt-2 text-sm text-gray-600">Have a Account</p>
          <a href="#" className="text-blue-500 hover:underline">
            Sign IN!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Query;
