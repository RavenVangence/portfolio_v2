import { useState } from 'react'
import '../styles/App.css'
import NavbarAndDashboard from './navbar';
import Projects from './projects';
import Contact from './contact';

function App() {

  return (
    <div className="app">
      <NavbarAndDashboard/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
