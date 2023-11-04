import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";


  const router= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[

            {
                path:'/',
                element:<Home></Home>,
            }

        ],
    }
  ]);

  export default router;