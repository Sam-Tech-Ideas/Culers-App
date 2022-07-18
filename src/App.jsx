import React from 'react'
import Hero from './components/Hero'
import Latest from './components/Latest'
import Navbar from './components/Navbar'
import New from './components/New'


function App() {
  return (
    <div className='App-header'>
  
      <Hero/>
      <New/>
      <Latest/>
    </div>
  )
}

export default App