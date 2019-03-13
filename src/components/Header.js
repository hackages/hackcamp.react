import React from 'react'
import '../css/Header.css'

export const Header = ({logo}) => {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  )
}
