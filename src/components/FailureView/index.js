import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export class FailureView extends Component {
  render() {
    return (
      <div className='failure-view'>
        <h1 className='fail-heading'>Better Luck Next Time </h1>
        <img src='https://www.shareicon.net/data/128x128/2016/10/25/847517_sad_512x512.png' className='failure-image' alt='Fail'/>
        <Link to='/'>
            <button type='button' className='fail-button'>Try Again!</button>
        </Link>
      </div>
    )
  }
}

export default FailureView
