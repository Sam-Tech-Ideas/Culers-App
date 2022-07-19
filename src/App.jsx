import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Latest from './components/Latest'
import Navbar from './components/Navbar'
import New from './components/New'
import Chan  from './components/Chan'


function App() {
  return (
    <div className='App-header'>
      <Navbar/>
      <Hero/>
      <New/>
      <Latest/>
      <Chan/>
      <Footer/>
    </div>
  )
}

export default App