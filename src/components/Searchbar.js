import React from 'react'

export default function Searchbar() {
  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-md px-2">
        <div className="flex items-center justify-center h-10 w-10 border-r border-gray-300">
          <img src="images\location-pin-svgrepo-com.svg" alt='' />
        </div>
        <input type="text" placeholder="Search locations" className="w-full focus:outline-none" />
      </div>
      <div className="flex items-center border border-gray-300 rounded-md mt-2 px-2">
        <div className="flex items-center justify-center h-10 w-10 border-r border-gray-300">
          <img src="images\search-svgrepo-com.svg" alt='' />
        </div>
        <input type="text" placeholder="Search for doctors, clinics, hospitals, etc." className="w-full focus:outline-none" />
      </div>
      <div className="flex items-center mt-2">
        <p className="mr-1">Try</p>
        <span className="bg-blue-500 text-white px-1 rounded-md mr-1">Plus</span>
        <p>Save upto 60% on your healthcare expanses</p>
      </div>
    </>
  )
}

