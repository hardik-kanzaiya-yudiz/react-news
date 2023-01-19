

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {

  render() {

    //all router 
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar category='general' />,
      },
      {
        path: "/business",
        element: <News category='business' />,
      },
      {
        path: "/entertainment",
        element: <News category='entertainment' />,
      },
      {
        path: "/general",
        element: <News category='general' />,

      },
      {
        path: "/health",
        element: <News category='health' />,
      },
      {
        path: "/science",
        element: <News category='science' />,
      },
      {
        path: "/sports",
        element: <News category='sports' />,
      },
      {
        path: "/technology",
        element: <News category='technology' />,
      },


    ]);


    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
  }
}