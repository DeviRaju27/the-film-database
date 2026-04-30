import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Favorites from "./pages/Favorites";
import Home from './pages/Home'
import Footer from './components/footer';


function App() {

  return (
   
    <div className="d-flex flex-column min-vh-100 w-100 bg-white">
      <Header/>
      <main className="flex-grow-1">
          <div className='container-fluid'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
        </div>
      </main>
      <Footer/>
    </div>
   
  )
}

export default App
