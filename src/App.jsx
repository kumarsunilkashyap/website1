import { createBrowserRouter, RouterProvider,Router } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Country from "./Pages/Country"
import Contact from "./Pages/Contact"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path  : "/contact",
        element: <Contact />
      }
      
    ]
  }
])
  
  

function App() {


  return (
    <>
      <RouterProvider router={ router }></RouterProvider>
    </>
  )
}

export default App
