import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <div className="App">
        <Header />
        <SideBar />
    </div>
  )
}

export default App
