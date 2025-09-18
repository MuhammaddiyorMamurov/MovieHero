import { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import {Home, Movie} from "../pages"

function Routes() {
    const router = createBrowserRouter([

        {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path: "/movie",
                element:<Movie/>
            },
        ]
    }
])

  return <RouterProvider router={router}/>
}

export default Routes
