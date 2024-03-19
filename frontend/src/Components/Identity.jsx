import React from 'react'
import { GiIndianPalace } from "react-icons/gi";
import IndianNames from "../APIs/IndianNames"
const Identity = () => {
  console.log(IndianNames);
  const randomPerson = Math.floor(Math.random() * 5) + 1;
  const displayPerson = IndianNames[randomPerson]
  return (
    <>
    <div className="identity-div text-center d-flex">
        ♦️ Your Identity ♦️
    </div> 
    </>
  )
}

export default Identity