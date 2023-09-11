import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div className='header-container'>
            <div className='centered-content'>
                <h1 className='slogan' > The World's First Bidding Game Platform </h1>
                <a href='#' className='signupoffer'>
                    Sign Up now & GET FREE 10 Electra Coins
                </a>
                <div className='signupbtn-container'>
                   <button className='signupbtn'> Register </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
