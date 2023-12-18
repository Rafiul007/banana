import React from 'react'
import './Card.css'
import bob from '../assets/bob.jpg'
function Card(props) {
  return (
    <div className="card-container">
        <div className="img-container">
            <img src={props.img} alt='bob'/>
        </div>
        <div className="card-body-container">
            <h1>{props.name}</h1>
            <p>{props.banana}</p>
        </div>
    </div>
  )
}

export default Card