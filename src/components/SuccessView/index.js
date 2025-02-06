import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GiPartyPopper } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


import './index.css'

export class SuccessView extends Component {
  state = {
    toggleButton: true
  }

  onToggleButton = () => {
    this.setState((prevState) => ({toggleButton: !prevState.toggleButton}))
}
  render() {
    const {toggleButton} = this.state
    const background = toggleButton ? "Light_background" : "dark-background"
    const heading = toggleButton ? "dark-heading" : "light-heading"
    const toggleRestartButton = toggleButton ? 'dark-restart-button' : 'light-restart-button' 

    return (
      <div className={`success-view ${background}`}>
        <div className='button-container'>
              <button type='button' className="togglebutton" onClick={this.onToggleButton}>
                    {toggleButton ? <FaMoon className='dark-moon'/> : <MdOutlineWbSunny className='light-moon'/>}
              </button>
        </div>
        <h1 className={`Success-heading ${heading}`}>You Did It <span><GiPartyPopper className={`success-icon ${heading}`}/></span></h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SgrEH-ui5av-N8XyHMz4LcfMHTWJodbB0w&s'
        className='success-image' alt='Success'/> 
        <Link to='/'>
          <button className={`success-button ${toggleRestartButton}`} type='button'>Restart</button>
        </Link>
      </div>
    )
  }
}

export default SuccessView
