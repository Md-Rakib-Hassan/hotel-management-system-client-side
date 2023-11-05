import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import EventsAndActivities from "../pages/EventsAndActivities";
import ContactUs from "../pages/ContactUs";
import BookNow from "../pages/BookNow";
import CareerOpportunities from "../pages/CareerOpportunities";
import LocalAreaGuide from "../pages/LocalAreaGuide";
import FAQ from "../pages/FAQ";
import AboutUs from "../pages/AboutUs";


  const router= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[

            {
                path:'/',
                element:<Home></Home>,
            },
            {
              path:'/rooms',
              element:<Rooms></Rooms>,
            },
            {
              path:'/gallery',
              element:<Gallery></Gallery>,
            },
            {
              path:'/testimonials',
              element:<Testimonials></Testimonials>,
            },
            {
              path:'/Events-and-Activities',
              element:<EventsAndActivities></EventsAndActivities>,
            },
            {
              path:'/contact-us',
              element:<ContactUs></ContactUs>,
            },

            {
              path:'/book-now',
              element:<BookNow></BookNow>,
            },
            {
              path:'/career-opportunities',
              element:<CareerOpportunities></CareerOpportunities>,
            },
            {
              path:'/local-area-guide',
              element:<LocalAreaGuide></LocalAreaGuide>,
            },
            {
              path:'/faqs',
              element:<FAQ></FAQ>,
            },
            {
              path:'/about-us',
              element:<AboutUs></AboutUs>,
            },
            
           

        ],
    }
  ]);

  export default router;