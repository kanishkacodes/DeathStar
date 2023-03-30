export default function Navbar() {
  return (
    <>
      <div className="border-spacing-3  py-4 flex border-b mb-4 my-1 mx-2">
        <div className="flex items-center space-x-4">
          <div className="mr-8 pl-14">
            <img src="https://www.practo.com/nav/9.5.15/consumer/images/practo.svg" alt="Practo logo" />
          </div>
          <div className="flex space-x-6 font-semibold ">
            <a href="/">Find Doctors</a>
            <a href="/">Video Consult</a>
            <a href="/">Medicines</a>
            <a href="/">Labtests</a>
            <a href="/">Surgeries</a>
          </div>
        </div>

        <div className="flex space-x-6 ml-auto mr-20 ">
          <a href="/" className="mr-4">
            <span className=" bg-blue-900 text-white rounded-full px-2 text-xs">NEW</span> For Corporates
            
          </a>
          <a href="/" className="mr-4">For Providers</a>
          <div className="mr-4">
            <a href="/" className="mr-4">Security &amp; Help</a>
          </div>
          <div>
            <button className="bg-white hover:text-blue-300 hover:border-blue-300 text-gray-800 py-2 px-2 pr-3 pl-3 border border-gray-400 rounded text-xs">
              Login / Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
