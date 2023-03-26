import React from 'react';

export default function Navbar() {
  return (
    <>
      <div>
        <div>
          <img  src="https://www.practo.com/nav/9.5.15/consumer/images/practo.svg" alt="Practo logo" />
        </div>
        <div >
          <a href="/">Find Doctors</a>
          <a href="/" >Video Consult</a>
          <a href="/" >Medicines</a>
          <a href="/" >Labtests</a>
          <a href="/">Surgeries</a>
        </div>
        <div>
          <a href="/"><span>new</span> For Corporates</a>
          <a href="/">For Providers</a>
          <a href="/">Security &amp; Help</a>
        </div>
        <div>
          <button className="bg-white hover:text-blue-300 hover:border-blue-300 text-gray-800  py-2 px-2 pr-3 pl-3 border border-gray-400 rounded text-xs">Login / Signup</button>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 my-4" />
    </>
  );
}
