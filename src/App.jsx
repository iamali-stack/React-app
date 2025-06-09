import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
