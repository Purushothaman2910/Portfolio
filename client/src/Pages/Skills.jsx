import React from 'react'
import '../assets/css/Skills.css'
import { SkillsCard } from '../components'
import { ReactLogo ,MongoDbLogo ,JsImage , TailwindLogo ,NodejsLogo  } from '../assets'
function Skills() {
  let SkillsArray = [
    {
      Image : JsImage ,
      title : (<><p>Java</p>&nbsp;<p>script</p></>) ,
      content : (<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa ducimus nulla velit corrupti, modi a reprehenderit dolorem itaque nemo?</>) 
    },
    {
      Image : NodejsLogo ,
      title : (<><p>Node</p>&nbsp;<p>js</p></>) ,
      content : (<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa ducimus nulla velit corrupti, modi a reprehenderit dolorem itaque nemo?</>) 
    },
    {
      Image : ReactLogo ,
      title : (<><p>React</p>&nbsp;<p>js</p></>) ,
      content : (<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa ducimus nulla velit corrupti, modi a reprehenderit dolorem itaque nemo?</>) 
    },
    {
      Image : TailwindLogo ,
      title : (<><p>Tailwind</p>&nbsp;<p>css</p></>) ,
      content : (<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa ducimus nulla velit corrupti, modi a reprehenderit dolorem itaque nemo?</>) 
    },
    {
      Image : MongoDbLogo ,
      title : (<><p>Mongo</p>&nbsp;<p>DB</p></>) ,
      content : (<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa ducimus nulla velit corrupti, modi a reprehenderit dolorem itaque nemo?</>) 
    },
  ]
  return (
    <div className='skillsDiv'>
      <div className="skillsMainDiv">        
        <div className="skillsHeadingDiv">
          <p>My</p>&nbsp;&nbsp;<p>Skills</p>
        </div>
      </div>
        <div className="skillsContentDiv">
          {
            SkillsArray.map(({Image , title , content} , i)=> <SkillsCard logo={Image} title={title} content={content} />)
          }
        </div>
    </div>
  )
}

export default Skills