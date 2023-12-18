import React from 'react'
import './Card.css'
import bob from '../assets/bob.jpg'
function Card() {
  return (
    <div className="card-container">
        <div className="img-container">
            <img src={bob} alt='bob'/>
        </div>
        <div className="card-body-container">
            <h1>Bob the Minnion</h1>
            <p>Bob is a trouble-maker and an attention seeker. He acts naturally like a child, very cute for sure but sometimes, annoying</p>
        </div>
    </div>
  )
}

export default Card