import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import SuccessView from './components/SuccessView'
import FailureView from './components/FailureView'


import './App.css';

class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/success' element={<SuccessView />}></Route>
        <Route exact path='/failure' element={<FailureView />}></Route>
      </Routes>
    </BrowserRouter>
  )
 }
}

export default App;
