import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between bg-white shadow-sm py-4 px-8">
        <div className="padding">
          <img src="https://www.practo.com/nav/9.5.15/consumer/images/practo.svg" alt="Practo logo" />
        </div>
        <div className="hidden md:block">
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">Find Doctors</a>
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">Video Consult</a>
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">Medicines</a>
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">Labtests</a>
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">Surgeries</a>
        </div>
        <div className="hidden md:block">
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600"><span className="bg-blue-500 text-white px-1 rounded-md">new</span> For Corporates</a>
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">For Providers</a>
          <a href="/" className="text-gray-800 mx-2 hover:text-gray-600">Security &amp; Help</a>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login/Signup</button>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 my-4" />
    </>
  );
}
