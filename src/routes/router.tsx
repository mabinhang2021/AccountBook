import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";

import { MainLayout } from "../layouts/MainLayout";
import { WelcomeRoutes } from "./WelcomeRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      errorElement: <ErrorPage />,
      children:[
        WelcomeRoutes
      ]
    },
    {
      path: "/home",
      element:<div>home</div>,
    }
    
  
  ]);