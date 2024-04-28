import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/UI/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className='background-parent'>
        <div className="background"></div>
      </div>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
