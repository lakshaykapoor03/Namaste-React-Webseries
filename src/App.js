import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Menu from "./Components/Menu";
import Shimmer from "./Components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
    { path: "/",
element: <AppLayout />,
errorElement:<Error/>, 
children:[
    { path: "/",
    element: <Body /> },
    { path: "/about",
    element: <AboutUs /> },
    { path: "/contact",
    element: <Contact /> },
    { path: "/menu/:id",
    element: <Menu />
   },
    { path: "/cart",
    element: <Cart /> }
] } ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
