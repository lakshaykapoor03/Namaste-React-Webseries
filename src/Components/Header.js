import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-[gray] cursor-pointer">
      <Link to="/"><img className="w-12" src="https://icon-library.com/images/restaurant-app-icon/restaurant-app-icon-25.jpg" alt="" /></Link>
      <div  className= "flex w-[30%] justify-around list-none">
        
        <Link to="/">  <li>Home</li></Link>
        <Link to="/about"><li>About Us</li></Link>
        <Link to="/contact"> <li>Contact</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
      
      </div>
    </div>
  )
}

export default Header;