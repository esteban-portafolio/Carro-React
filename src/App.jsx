import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/NavBar/Navbar'
import Content from './components/ItemListContainer/Content'
import Footer from './components/Footer/Footer'
import DetailContainer from './components/ItemDetailContainer/DetailContainer'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/detalle' element={<DetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <div className="App">

    // </div>
  )
}

export default App
