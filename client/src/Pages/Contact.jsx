import React from 'react'
import { MyImage } from '../assets'
import { FaLinkedinIn ,FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import '../assets/css/Contact.css'

function SocialMediaIcon ({name , link , logo , download , target}){
  return(
    <a href={link} download={download} target={target}>
          {logo}
          <span className="tooltip-social">{name}</span>
    </a>
  )
}

function Contact() {
  let Name = 'Purushothaman .V'
  let Designation = 'Full stack developer'
  let socialMedia = [
    {
      logo : <FaGithub size={25} />,
      link : 'https://github.com/Purushothaman2910' ,
      name : 'github' ,
      download : false ,
      target : ''
    },
    {
      logo : <FaLinkedinIn size={25} />,
      link : 'https://www.linkedin.com/in/purushothamanvelusamy' ,
      name : 'Linked in',
      download : false ,
      target : ''
    },
    {
      logo : <IoMdMail size={25} />,
      link : '#' ,
      name : 'velusamypurushothaman@gmail.com',
      download : false ,
      target : ''
    },
    {
      logo : <ImProfile size={25} />,
      link : './Purushothaman_Resume.pdf' ,
      name : 'Resume',
      download : false ,
      target : 'blank'
    },
  ]
  return (
    <div className='contactMainDiv'>      
        <div className="card-client">
            <div className="user-picture">
                <img src={MyImage} alt="" />
            </div>
            <p className="name-client"> {Name}
                <span>{Designation}</span>
            </p>
            <div className="social-media">
              {
                socialMedia.map(({name  ,logo , link, download ,target } , i ) => 
                <SocialMediaIcon key={i} link={link} logo={logo} name={name} download={download} target={target}/>
              )
              }                                
            </div>
        </div>
    </div>
  )
}

export default Contact