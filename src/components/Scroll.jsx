import React, { useEffect } from 'react'
import './Scroll.css'
import hero from '../assets/hero.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import banana from '../assets/banana.js'
import Card from './Card.jsx'
function Scroll() {
  useEffect(() => {
    Aos.init({ duration: 2000 })

  }, [])

  return (
    <div className="container">
      <div className="nav-bar">
        <div className="navbar-container">
          <h1>Minnions</h1>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-container">
        <div className="box1" data-aos="fade-right">
          <img src={hero} alt='hero' />
        </div>
        <div className="box2" data-aos="fade-left">
          <h1>Hola!👋 Hoomans</h1>
          <p>C’est banana!🍌 Hahaha! Miam Miam! Huh?</p>
          <button className='banana-btn'>Banana 🍌</button>
        </div>
      </div>
      <div className="sub-container-2">
        <div className="mind-da-gap" data-aos="fade-up">
          <h1> “Mind the gap! Mind the gap! Mind the gap!” — Minions</h1>
        </div>
        <div className="minions-container">
          {
            banana.map((item, index) => {
              return (
                <div className="minion" data-aos="zoom-in">
                  <Card img={item.img} name={item.name} banana={item.banana} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="footer-container">
        <span>&copy; 2023 Minnions. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Scroll