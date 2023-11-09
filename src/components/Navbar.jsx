import { NavLink,Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {


  const context = useContext(AuthContext);
    const { user, logOut,isLoding } = context;
  
  const navElement = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/rooms'}>Rooms</NavLink></li>
    <li> <NavLink to={'/gallery'}>Gallery</NavLink></li>
    <li> <NavLink to={'/testimonials'}>Testimonials</NavLink></li>
    <li> <NavLink to={'/Events-and-Activities'}>Events and Activities</NavLink></li>
    <li> <NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    <li > <NavLink to={'/my-booking'} > <span className="">My Booking</span > </NavLink></li>

    <li tabIndex={0}>
      <details>
        <summary>More</summary>
        <ul className="p-2">
          <li><NavLink to={'/career-opportunities'}>Career Opportunities</NavLink></li>
          <li><NavLink to={'/local-area-guide'}>Local Area Guide</NavLink></li>
          <li><NavLink to={'/faqs'}>FAQ</NavLink></li>
          <li><NavLink to={'/about-us'}>About Us</NavLink></li>
          <li><NavLink to={'/terms-and-conditions'}>Terms And Conditions</NavLink></li>
        </ul>
      </details>
    </li>
    
  </>





  return (
    <div className="navbar bg-base-100 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {
            navElement
           }
          </ul>
        </div>
        <Link to={'/'}><img src="hotel-logo.png" className="h-16 hidden lg:block" alt="" /></Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navElement
          }
        </ul>
      </div>
      <div className="navbar-end">
                <div className=" hidden md:flex  ">

                    <div className=' flex justify-end items-center' >

                        {
                            user && <p className='mr-4 '>{user?.displayName}</p>
                        }
                        {
                            user == null ? <Link to={'/login'}><button className="btn">Login</button></Link> : <div className="dropdown dropdown-end ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 h-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><button onClick={logOut}>Logout</button></li>
                                </ul>
                            </div>
                        }


                    </div>

                   

                </div>

                
                {user != null ? <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><button>{user?.displayName}</button></li>
                        <li><button onClick={logOut}>Logout</button></li>
                    </ul>
                </div> : <Link to={'/login'}><button className="btn md:hidden">Login</button></Link>}

               


            </div>
    </div>
  );
};

export default Navbar;