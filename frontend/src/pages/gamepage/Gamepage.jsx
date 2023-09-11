import React from 'react'
import Gmpgnavbar from '../../Components/Gmpgnavbar/Gmpgnavbar'
import Gmpgheader from '../../Components/Gmpgheader/Gmpgheader'
import Gmpgsidebar from '../../Components/Gmpgsidebar/Gmpgsidebar'
import Gmpgchat from '../../Components/Gmpgchat/Gmpgchat'
import Footer from '../../Components/Footer/Footer'
function gamepage() {
  return (
   <>
    <Gmpgnavbar/>
    <Gmpgsidebar/>
    <Gmpgheader/>
    <Gmpgchat/>
    <Footer/>
    
   </>
  )
}

export default gamepage

