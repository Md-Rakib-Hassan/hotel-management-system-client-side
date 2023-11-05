import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const navElement = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/rooms'}>Rooms</NavLink></li>
    <li> <a>Gallery</a></li>
    <li> <a>Testimonials</a></li>
    <li> <a>Events and Activities</a></li>
    <li> <a>Contact Us</a></li>
    <li > <a> <span className=" text-green-600 font-medium">Book Now</span > </a></li>

    <li tabIndex={0}>
      <details>
        <summary>More</summary>
        <ul className="p-2">
          <li><a>Career Opportunities</a></li>
          <li><a>Local Area Guide</a></li>
          <li><a>FAQ</a></li>
          <li><a>Local Area Guide</a></li>
          <li><a>About Us</a></li>
        </ul>
      </details>
    </li>
    
  </>





  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {
            navElement
           }
          </ul>
        </div>
        <img src="hotel-logo.png" className="h-16" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navElement
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost">Login</a>
      </div>
    </div>
  );
};

export default Navbar;