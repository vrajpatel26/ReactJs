import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact, contactData } from "./pages/Contact"
import { Movie } from "./pages/Movie"

import { AppLayout } from "./components/layout/AppLayout"
import "./App.css"
import { ErrorPage } from "./pages/ErrorPage"
import { getMoviesData } from "./API/getAPIData"
import { MovieDetails } from "./components/UI/MovieDetails"
import { getMovieDetails } from "./API/getMovieDetails"
const App = () => {

  //Old Method

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}></Route>
  //       <Route path="/about" element={<About/>}></Route>
  //       <Route path="/contact" element={<Contact/>}></Route>

  //     </Route>
  //   )
  // )




  //New Method

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
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
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:MovieID",
          element: <MovieDetails />,
          loader: getMovieDetails
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData
        },
      ]
    }


    // {
    //   path: "/",
    //   element: <Home />
    // },
    // {
    //   path: "/about",
    //   element: <About />
    // }, {
    //   path: "/contact",
    //   element: <Contact />
    // },
  ])



  return <RouterProvider router={router} />
}

export default App