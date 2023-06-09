import React from 'react'

export default function Searchbar() {
  return (
    <>
    <div className='flex px-10 py-10'>
      <div className=' flex '>
        <div>
        <div className=' flex'>
        <div className=' h-4 w-4 ' >
          <img src="images\location-pin-svgrepo-com.svg" alt='' />
        </div>
          <input type="text" placeholder="Search locations" />
        </div>
      </div>
      <div>
        <div className='flex'>
        <div className=' h-4 w-4' >
          <img src="images\search-svgrepo-com.svg" alt='' />
        </div>
          <input  type="text" placeholder="Search for doctors, clinics, hospitals, etc." />
        </div>
      </div>
      </div>
      <div className=' flex  ml-auto  bg-pink-200 mr-20 text-xs p-3 '>
        <p className=' font-semibold'>Try</p>
        <span className=' p-1 bg-pink-600 text-sm text-white '>Plus</span>
        <p>Save upto 60% on your healthcare expanses </p>
      </div>
      </div>
    </>
  )
}

