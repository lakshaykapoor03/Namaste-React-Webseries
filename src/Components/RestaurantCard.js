import React from 'react'
import { useContext } from 'react'
import UserContext from '../utils.js/UserContext'

const RestaurantCard = ({restaurant}) => {

    const {name, id, cuisines, cloudinaryImageId} = restaurant.data
  const {user} = useContext(UserContext)
    return (
    <div className="bg-white w-48 rounded-sm p-1 text-sm m-2 overflow-clip ">
        <img className="w-42" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="" />
        <h1>{name}</h1>
        <span className="">{cuisines.join(",")}</span>
        <p>4.0 rating</p>
        <p>200 for one</p>
        <p>{user.name}</p>
    </div>
  )
}

export default RestaurantCard