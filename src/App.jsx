import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Content
       imagen ='src/img/foto-compreas.jpg'
       titulo = 'CONTENEDOR'
      />
      <Footer/>
    </div>
  )
}

export default App
