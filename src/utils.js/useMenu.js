import React from 'react'
import { useState, useEffect } from 'react';

const useMenu = (id) => {
    const [menuItems, setMenuItems] = useState([]);
    //     const {id} = useParams()
    //   console.log(id)
  
    const getRestaurantMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38965721231865&lng=77.28755168616772&restaurantId=${id}&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(
        json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards[0].card.info
      );
      console.log(json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
      setMenuItems(
        json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      );
    };
  
    useEffect(() => {
      getRestaurantMenu();
    }, []);
  
    return menuItems;
}

export default useMenu