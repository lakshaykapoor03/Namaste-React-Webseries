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
import { useState } from "react";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils.js/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils.js/store";

const AppLayout = () => {

  
  const [user, setUser] = useState({
    name:"lakshay kapoor",
    email:"kapoorlakshay@gmail.com"
  })
  
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:user,
    setUser:setUser}}>  
  <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    </UserContext.Provider> 
    </Provider>

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
