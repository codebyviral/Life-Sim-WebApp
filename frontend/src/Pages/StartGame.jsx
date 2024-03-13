import React from 'react'
import LifeNav from "../Components/LifeNav"
import PlayerNav from '../Components/PlayerNav'
import Identity from '../Components/Identity'
import Avatar from '../Components/Avatar'

const StartGame = () => {
  return (
    <>
    <LifeNav />
    <PlayerNav />
    <div className='identity-component'>
      <Identity />
      <Avatar />
    </div>
    </>
  )
}

export default StartGame