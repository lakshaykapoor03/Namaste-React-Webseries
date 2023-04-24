import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils.js/UserContext";


const Body = () => {
  const [restaurantCard, setRestaurantCard] = useState([]);
  const [filteredRestaurantCard, setFilteredRestaurantCard] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState([]);
const {user, setUser}= useContext(UserContext)

  const getRestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.38965721231865&lng=77.28755168616772&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards)
    setRestaurantCard(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantCard(json?.data?.cards[2]?.data?.data?.cards);
  };
  const onSearch = (restaurantList, searchRestaurant) => {
    const filteredRestaurant = restaurantList.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchRestaurant)
    );
    return filteredRestaurant;
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div className="">
      <div className=" flex justify-between">
      <input
          type="text"
          name=""
          id=""
          placeholder="name"
          className="bg-[skyblue]"
          value={user.name}
          onChange={(e) => setUser({...user, name:e.target.value})}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="email"
          className="bg-[skyblue]"
          value={user.email}
          onChange={(e) => setUser({...user, email:e.target.value})}
        />
        <input
          type="text"
          name=""
          id=""
          className="bg-[skyblue]"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        
        <button
          className="bg-[green] rounded-sm text-white mx-2"
          onClick={() => {
            const filterData = onSearch(restaurantCard, searchRestaurant);
            setFilteredRestaurantCard(filterData);
          }}
        >
          Search
        </button>
      </div>

      <div className=" flex flex-wrap mx-4">
        {restaurantCard.length === 0 ? (
          Array(15)
            .fill("")
            .map((e, i) => <Shimmer key={i} />)
        ) : filteredRestaurantCard.length == 0 ? (
          <h1>No Results found.....</h1>
        ) : (
          filteredRestaurantCard.map((rest) => (
           <Link to={"/menu/"+rest.data.id} key={rest.data.id} > <RestaurantCard restaurant={rest} />
           </Link>
          ))
        )}
      
      </div>
    </div>
  );
};

export default Body;
