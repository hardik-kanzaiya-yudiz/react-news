

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './components/Home';

export default class App extends Component {

  render() {

    //all router 
    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <Navbar category='general' />,
    //   },
    //   {
    //     path: "/business",
    //     element: <News category='business' />,
    //   },
    //   {
    //     path: "/entertainment",
    //     element: <News category='entertainment' />,
    //   },
    //   {
    //     path: "/general",
    //     element: <News category='general' />,

    //   },
    //   {
    //     path: "/health",
    //     element: <News category='health' />,
    //   },
    //   {
    //     path: "/science",
    //     element: <News category='science' />,
    //   },
    //   {
    //     path: "/sports",
    //     element: <News category='sports' />,
    //   },
    //   {
    //     path: "/technology",
    //     element: <News category='technology' />,
    //   },


    // ]);


    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home key={"homw"} />} > </Route>
          <Route exact path='/business' element={<News pageSize={5} key={"business"} category="business" />} />
          <Route exact path='/entertainment' element={<News pageSize={5} key={"entertainment"} category="entertainment" />} />
          <Route exact path='/general' element={<News pageSize={5} key={"general"} category="general" />} />
          <Route exact path='/health' element={<News pageSize={5} key={"health"} category="health" />} />
          <Route exact path='/science' element={<News pageSize={5} key={"science"} category="science" />} />
          <Route exact path='/sports' element={<News pageSize={5} key={"sport"} category="sports" />} />
          <Route exact path='/technology' element={<News pageSize={5} key={"technology"} category="technology" />} />
          {/* </Route> */}
        </Routes>
      </>
    )
  }
}