"use client"

import React from 'react'
import { useTheme } from './ThemeContext'
import { BsMoonFill, BsSun } from "react-icons/bs";

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='text-5xl uppercase font-semibold tracking-widest mt-16 mb-10 flex justify-between items-center'>
      <h2 className='text-white'>Todo</h2>
      <button className='text-white text-4xl'
        onClick={toggleTheme}
      >
        {
          theme === "dark" ? (
              <BsSun />
          ) : (
              <BsMoonFill />
          )
        }

      </button>
    </div>
  )
}

export default Header
