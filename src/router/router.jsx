import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";


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
              element:<Rooms></Rooms>
            },
            

        ],
    }
  ]);

  export default router;