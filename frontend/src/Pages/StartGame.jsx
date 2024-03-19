import React from 'react'
import LifeNav from "../Components/LifeNav"
import PlayerNav from '../Components/PlayerNav'
import Identity from '../Components/Identity'
import DarkMode from '../Components/DarkMode'

const StartGame = () => {
  return (
    <>
    <LifeNav />
    <PlayerNav />
    <DarkMode />
    <div className='identity-component'>
      <Identity />
    </div>
    </>
  )
}

export default StartGame