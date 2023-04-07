import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-[gray] cursor-pointer">
      <img className="w-12" src="https://icon-library.com/images/restaurant-app-icon/restaurant-app-icon-25.jpg" alt="" />
      <div  className= "flex w-[30%] justify-around list-none">
        
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
      
      </div>
    </div>
  )
}

export default Header;