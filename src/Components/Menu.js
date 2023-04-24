import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../utils.js/useMenu";
import  addItem from "../utils.js/cartSlice";
import { useDispatch } from "react-redux";

const MenuItem = ({ item }) => {
  const { name } = item;

  const dispatch = useDispatch()

  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
  return (
    <div className="flex justify-between mx-4 items-center ">
    <h1>{name}</h1>
    <button onClick={()=>handleAddItem(name)} className="bg-green-600 m-2 px-2 rounded cursor-pointer">Add</button>
    </div>
  );
};

const Menu = () => {

  const { id } = useParams();
  console.log(id);

  const menuItems =  useMenu(id)
  console.log(menuItems)

  // const dispatch = useDispatch()

  // const handleAddItem = (item)=>{
  //   dispatch(addItem(item))
  // }

 

  return (
    <div>
      <h1>🚀</h1>
      {menuItems.map((item) => (
       <MenuItem item={item.card.info}/>
        
      ))}
    </div>
  );
};

export default Menu;
