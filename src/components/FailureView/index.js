import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

import './index.css'

export class FailureView extends Component {
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
    const toggleTyrAgainButton = toggleButton ? 'dark-tryagain-button' : 'light-tryagain-button'
    return (
      <div className={`failure-view ${background}`}>
        <div className='button-container'>
            <button type='button' className="togglebutton" onClick={this.onToggleButton}>
                {toggleButton ? <FaMoon className='dark-moon'/> : <MdOutlineWbSunny className='light-moon'/>}
            </button>
        </div>
        <h1 className={`fail-heading ${heading}`}>Better Luck Next Time </h1>
        <img src='https://www.shareicon.net/data/128x128/2016/10/25/847517_sad_512x512.png' className='failure-image' alt='Fail'/>
        <Link to='/'>
            <button type='button' className={`fail-button ${toggleTyrAgainButton}`}>Try Again!</button>
        </Link>
      </div>
    )
  }
}

export default FailureView
