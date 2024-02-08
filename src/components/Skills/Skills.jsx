import React from 'react'
import './Skills.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
const Skills = () => {
  return (
    <div className="skills">
        {/* left side */}
        <div className="awesome">
            <span>My Skills</span>
            <span>Stacks</span>
            <spane>Technology stacks are always coming up with new models,
              of which <br /> i choose to learn by space to grab more to equip my potentials and developing my career
            </spane>

        </div> 
        
        {/* right side */}
        <div className="cards">
          <div style={{left: '8rem'}}>
            <Card
            emoji ={HeartEmoji}
            heading = {'Design'}
            detail = {"Figma,Photoshope, Adobe Xd"}
            />
          </div>
          {/*second card*/}
          <div style={{top: "12rem", left: "-4rem"}}>
            <Card
            emoji ={Glasses}
            heading = {'Developer'}
            detail = {"Html,Css,Javacript, React, React-Native"}
            />
          </div>
          {/* last card*/}
          <div style={{top: "19rem", left: "8rem"}}>
            <Card
            emoji ={Humble}
            heading = {'Cloud'}
            detail = {"Amazon Web Services"}
            />
          </div>
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
    </div>
  )
}

export default Skills