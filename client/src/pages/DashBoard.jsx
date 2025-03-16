import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function DashBoard() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Header/>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            <h1>Welcome to Dashboard!!!</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default DashBoard;
