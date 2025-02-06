import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GiPartyPopper } from "react-icons/gi";


import './index.css'

export class SuccessView extends Component {
  render() {
    return (
      <div className='success-view'>
        <h1 className='Success-heading'>You Did It <span><GiPartyPopper className='success-icon'/></span></h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SgrEH-ui5av-N8XyHMz4LcfMHTWJodbB0w&s'
        className='success-image' alt='Success'/> 
        <Link to='/'>
          <button className='success-button' type='button'>Restart</button>
        </Link>
      </div>
    )
  }
}

export default SuccessView
