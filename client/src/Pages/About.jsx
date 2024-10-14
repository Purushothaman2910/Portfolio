import React  from 'react'
import '../assets/css/About.css'
import { AboutContentParagraph1, AboutContentParagraph2 } from '../components'
import EducationCard from '../components/About/EducationCard'
import { SchoolLogo ,Collegelogo } from '../assets'


function About() {
  let Education = [
    {
      image : SchoolLogo ,
      content : (
      <>
       I completed my schooling at Saru Matriculation Higher Secondary School, where I laid the foundation for my academic journey. The school provided a nurturing environment that fostered not only my intellectual growth but also my personal development. Through a variety of extracurricular activities and a robust curriculum, I developed critical thinking skills and a passion for learning. The supportive faculty encouraged me to explore my interests, which ultimately helped shape my career path in technology and innovation. My time at Saru Matriculation was instrumental in preparing me for the challenges of higher education and my future career.
      </>       
      ) ,
      title : (<>Schooling ...</>)
    } ,
    {
      image : Collegelogo ,
      content : (
      <>
       I completed my undergraduate studies at Gobi Arts and Science College, where I honed my academic skills and developed a strong foundation in my field of study. The college provided an enriching environment with dedicated faculty and diverse extracurricular activities that encouraged personal growth and teamwork. My time there was instrumental in shaping my critical thinking abilities and passion for innovation, ultimately preparing me for a successful career in technology and beyond.
      </>       
      ) ,
      title : (<>College...</>)
    } ,
  ]
  return (
    <div className='aboutDiv'>
      <div className="aboutHero">        
      <div className="aboutMainDiv">
       <p className='aboutHeroMeHeading animateFromRight'>About me</p> 
       <div className="aboutMeHeroContent">
        <AboutContentParagraph1 />
        <AboutContentParagraph2 />   
        {
          Education.map(({image , content , title } , i)=> <EducationCard key={i} index={i} image={image} content={content} title={title} />  )
        }          
       </div>      
      </div>      
      </div>
    </div>
  )
}

export default About