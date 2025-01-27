import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js
import NavBar from './components/navbar/NavBar';
import HomePage from './components/pages/HomePage';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />

      <div style={{height:'100vh'}} className=' d-grid d-inline-grid'>
        <HomePage />
      </div>

        <Footer />
  
    </div>
  )
}

export default App
