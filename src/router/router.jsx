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
import CareerOpportunities from "../pages/CareerOpportunities";
import LocalAreaGuide from "../pages/LocalAreaGuide";
import FAQ from "../pages/FAQ";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Room from "../pages/Room";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage";
import MyBooking from "../pages/MyBooking";
import Error from "../pages/Error";


  const router= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
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
              element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute> ,
            },

            {
              path:'/my-booking',
              element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
            },
            {
              path:'/career-opportunities',
              element:<PrivateRoute><CareerOpportunities></CareerOpportunities></PrivateRoute>,
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
            {
              path: '/login',
              element: <Login></Login>,
          },
          {
              path: '/register',
              element: <Registration></Registration>,
          },
          {
            path:'/room/:roomId',
            element:<Room></Room>
          },
          {
            path:'/terms-and-conditions',
            element:<TermsAndConditionsPage></TermsAndConditionsPage>
          }

            
           

        ],
    }
  ]);

  export default router;