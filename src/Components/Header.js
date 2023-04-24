import React from 'react'
import { Link } from 'react-router-dom';
import useOnline from '../utils.js/useOnline';
import { useContext } from 'react';
import UserContext from '../utils.js/UserContext';
import { useSelector } from 'react-redux';



const Header = () => {
  
var isOnline = useOnline()
const {user, setUser}= useContext(UserContext)

const cartItems = useSelector((store) => store.cart.items)
console.log(cartItems)

if (!isOnline){ 
return <h1>🛑 Offline!! Please check your internet connection.</h1>
}
else{
  return (
    <>

    <div className="flex justify-around p-2 bg-[gray] cursor-pointer">
      <Link to="/"><img className="w-12" src="https://icon-library.com/images/restaurant-app-icon/restaurant-app-icon-25.jpg" alt="" /></Link>
      <div  className= "flex w-[80%] justify-around list-none">
      {/* <li>{user.name}</li>
      <li>{user.email}</li> */}
      <li>🟢 Online!!</li>
        <Link to="/">  <li>Home</li></Link>
        <Link to="/about"><li>About Us</li></Link>
        <Link to="/contact"> <li>Contact</li></Link>
        <Link to="/cart"><li>Cart - {cartItems.length} items</li></Link>
      
      </div>
    </div>
    </>
  )
}
}

export default Header;