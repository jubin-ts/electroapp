import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Graph from './Components/Graph/Graph'
import Winning from './Components/Winning/Winning'
import Banner from './Components/Banner/Banner'
import Payments from './Components/Payments/Payments'
import SignUp from './Components/SignUp/SignUp'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/> 
      <Header/>
      <Graph/>
      <Winning/>
      <Banner/>
      <Payments/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default App
