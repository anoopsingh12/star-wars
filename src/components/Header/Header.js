import React from 'react'
import star_wars_logo from '../../images/star_wars_logo.png'
const Header = () => {
  return (
    <div className="App-header">
      <img className="App-header-img" src={star_wars_logo} alt="Star Wars Logo"></img>
    </div>
  )
}

export default Header;