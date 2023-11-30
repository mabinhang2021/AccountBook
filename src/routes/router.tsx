import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import React from "react";
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
    
  
  ]);