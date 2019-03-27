import React from 'react';
import '../css/Header.css';
import logo from '../images/hackflix_logo.svg';

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
};
