import React from 'react'

export default function Navbar() {
    return (
        <>
            <div>
                <img src="https://www.practo.com/nav/9.5.15/consumer/images/practo.svg" alt="" />
            </div>
            <div>
                <a href='/'>Find Doctors</a>
                <a href="/">Video Consult</a>
                <a href=" /">Medicines</a>
                <a href="/">Labtests</a>
                <a href="/">Surgeries</a>
            </div>
            <div>
                <a href="/"><span>new</span> For Corporates</a>
                <a href="/">For Providers</a>
                <a href="/">Security&help</a>
            </div>
            <div>
                <button>Login/Signup</button>
            </div>
            <hr/>
            
        </>
    )
}
