
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import  RootLayer from "./pages/RootLayer";
import Home from "./pages/landingPages/Home";
import About from "./pages/landingPages/About";
import Problem from "./pages/landingPages/Problem";
import Feature from "./pages/landingPages/Feature";
import HowItWorks from "./pages/landingPages/HowItWorks";
import Contact from "./pages/landingPages/Contact";
import Solution from "./pages/landingPages/Solution";

const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayer,
    children : [
      { index: true, Component: Home },
      {path:'/about', Component: About},
      {path:'/problem', Component: Problem },
      {path:'/solution', Component: Solution },
      {path:'/feature', Component: Feature},
      {path:'/how-it-works', Component: HowItWorks},
      {path:'/contact', Component: Contact},

    ]
    
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App 