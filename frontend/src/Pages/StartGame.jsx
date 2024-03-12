import React from 'react'
import LifeNav from "../Components/LifeNav"
import PlayerNav from '../Components/PlayerNav'
import Identity from '../Components/Identity'

const StartGame = () => {
  return (
    <>
    <LifeNav />
    <PlayerNav />
    <div className='identity-component'>
      <Identity />
    </div>
    </>
  )
}

export default StartGame