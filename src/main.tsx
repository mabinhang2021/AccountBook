import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './components/ErrorPage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Outlet/>,
    errorElement: <ErrorPage />,
    children:[
      {index:true,element:<div>空</div>},
      {
        path:'welcome',
        element:<Outlet/>,
        children:[
          {index:true,element:<div>空</div>},
          {path:'1',
           element:
            (<div>1111 <NavLink to="/welcome/2">下一页</NavLink></div>)
          },
          {path:'2',element:
            (<div>2222 <NavLink to="/welcome/3">下一页</NavLink></div>)
          },
          {path:'3',
           element:
           (<div>3333 <NavLink to="/welcome/4">下一页</NavLink></div>)
          },
          {path:'4',element:
            (<div>4444 <NavLink to="/xxx">开始记账</NavLink></div>)
          },
        ]
      }
    ]



   
  },
  

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
