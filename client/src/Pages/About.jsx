import React  from 'react'
import '../assets/css/About.css'
import { AboutContentParagraph1, AboutContentParagraph2 } from '../components'


function About() {
  return (
    <div className='aboutDiv'>
      <div className="aboutHero">        
      <div className="aboutMainDiv">
       <p className='aboutHeroMeHeading animateFromRight'>About me</p> 
       <div className="aboutMeHeroContent">
        <AboutContentParagraph1 />
        <AboutContentParagraph2 />       
       </div>      
      </div>      
      </div>
    </div>
  )
}

export default About