import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Query from "./components/Mentor's-Talk";
import Ques from "./components/Q&A Hub";
import FeedBAck from "./components/FeedBack";
import Field from "./components/Field";
import Home from "./components/Home";
import Pcm from "./components/Pcm";
import Pcb from "./components/Pcb";
import Arts from "./components/Arts";
import Pcmb from "./components/PcmB";
import Government from "./components/Government";
import Commerece from "./components/Commerece";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PcmB from "./components/PcmB";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Field",
      element: (
        <>
          <Field />
        </>
      ),
    },
    {
      path: "/Ques",
      element: (
        <>
          <Ques />
        </>
      ),
    },
    {
      path: "/Query",
      element: (
        <>
          <Query />
        </>
      ),
    },
    {
      path: "/FeedBack",
      element: (
        <>
          <FeedBAck />
        </>
      ),
    },
    {
      path: "/stream/pcm",
      element: (
        <>
          <Pcm />
        </>
      ),
    },
    {
      path: "/stream/pcb",
      element: (
        <>
          <Pcb />
        </>
      ),
    },
    {
      path: "/stream/Pcmb",
      element: (
        <>
          <PcmB />
        </>
      ),
    },
    {
      path: "/stream/Arts",
      element: (
        <>
          <Arts />
        </>
      ),
    },
    {
      path: "/stream/commerece",
      element: (
        <>
          <Commerece />
        </>
      ),
    },
    {
      path:"/Government",
      element:(
        <>
        <Government/>
        </>
      )
    }
  ]);
  return  <RouterProvider router={router} />
  
}

export default App;
