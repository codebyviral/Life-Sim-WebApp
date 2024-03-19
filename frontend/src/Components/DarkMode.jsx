import React, { useState } from 'react'
import { FaLastfm } from 'react-icons/fa'
import { GiTurret } from 'react-icons/gi'

const DarkMode = () => {
    const [darkMode,setDarkMode] = useState(false)
    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
    }
  return (
    <>
    <div className="darkDiv">
    <label className="switch">
    <input id='darkToggle' onChange={toggleDarkMode} checked={darkMode} type="checkbox" />
    <span className="slider"></span>
    </label>
    </div>
    </>
  )
}

export default DarkMode