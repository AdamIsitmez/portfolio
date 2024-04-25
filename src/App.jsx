import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

import './App.css'

function App() {

  return (
    <>
      <div className='background-parent'>
        <div className="background"></div>
      </div>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
