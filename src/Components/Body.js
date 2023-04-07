import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react'
import { RestaurantList } from '../../Config'

const Body = () => {
  const [restaurantCard, setRestaurantCard] = useState(RestaurantList)
  const [searchRestaurant, setSearchRestaurant] = useState([])
  // console.log(restaurantCard[0].data)
  const onSearch = (restaurantList, searchRestaurant)=>{
    const filteredRestaurant = restaurantList.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchRestaurant) )
    return filteredRestaurant;
  }
  console.log(searchRestaurant)


  return (
    <div className="">
      <div className="mx-[40%]">
        <input type="text" name="" id="" className= "bg-[skyblue]" value = {searchRestaurant} onChange={(e)=>setSearchRestaurant(e.target.value)}/>
        <button className='bg-[green] rounded-sm text-white mx-2' onClick={ ()=>{
          const filterData = onSearch(RestaurantList, searchRestaurant)
          setRestaurantCard(filterData);

        }} >Search</button>
      </div>
      <div className=" flex flex-wrap mx-4">
     {
       restaurantCard.map((rest)=>( 
        <RestaurantCard  key= { rest.data.id}  restaurant= {rest}/>
      )
       )
      
     }
      </div>
    </div>
  )
}

export default Body