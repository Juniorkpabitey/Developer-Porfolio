/* eslint-disable no-unused-vars */
import React from 'react'
import '../Intro/Intro.css'
import Github from '../../img/github.png';
import LinkedIn from  '../../img/linkedin.png';
import Instagram from   '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/pic1.jpg'



const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hi! I am </span>
            <span>Peter Baah Kpabitey</span>

            <span>I am a Computer Science Student at the University Of Cape Coast. Currently in my
              third year. I leave at Dormaa Ahenkro, I am passionate about Software Development and Cloud Management
            </span>
        </div>  

        <div className="i-icons">
        <a href="https://github.com/Juniorkpabitey" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/peter-baah-kpabitey" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" />
            </a>
             <a href="https://www.instagram.com/peter_baah_kpabitey" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" />
            </a> 

        </div>

        </div>
        <div className="i-right">
        <img src="{Vector1}" alt=""  />
        <img src="{Vector2}" alt="" />
        <img src={boy} alt=""  className='oval-image'/>
        
        </div>
    </div>
  )
}

export default Intro