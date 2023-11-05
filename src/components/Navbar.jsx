import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const navElement = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/rooms'}>Rooms</NavLink></li>
    <li> <NavLink to={'/gallery'}>Gallery</NavLink></li>
    <li> <NavLink to={'/testimonials'}>Testimonials</NavLink></li>
    <li> <NavLink to={'/Events-and-Activities'}>Events and Activities</NavLink></li>
    <li> <NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    <li > <NavLink to={'/book-now'}> <span className=" text-blue-600 font-medium">Book Now</span > </NavLink></li>

    <li tabIndex={0}>
      <details>
        <summary>More</summary>
        <ul className="p-2">
          <li><NavLink to={'/career-opportunities'}>Career Opportunities</NavLink></li>
          <li><NavLink to={'/local-area-guide'}>Local Area Guide</NavLink></li>
          <li><NavLink to={'/faqs'}>FAQ</NavLink></li>
          <li><NavLink to={'/about-us'}>About Us</NavLink></li>
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