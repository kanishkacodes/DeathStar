import React from 'react'

export default function Searchbar() {
  return (
    <>
    <div>
        <img src="public\images\location.png" alt=''/>
        <input type="text" placeholder="Search locations"/>
    </div>
    <div>
        <img src="public\images\search.png" alt=''/>
        <input type="text" placeholder="Search for doctors, clinics, hospitals, etc." />
    </div>
    <div><p>Try</p><span>Plus</span><p>Save upto 60% on your healthcare expanses</p></div>
    </>
  )
}
