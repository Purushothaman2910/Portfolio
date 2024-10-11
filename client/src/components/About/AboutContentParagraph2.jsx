import React, { useEffect, useRef, useState } from 'react'
import { InviewPortListener } from '../../utils'

function AboutContentParagraph2() {
  let [visible , setVisible] = useState(false)
  let ref = useRef(null)
  let viewPortOberver = new InviewPortListener(setVisible , ref)


  useEffect(()=>{
    viewPortOberver.Observe()
    return viewPortOberver.unObserve()
  } , [])

  
  return (
    <p 
    className={`animate ${(visible)?'animateFromRight':''}`}
    ref={ref}
    >With a strong foundation in the MERN stack (
        <span>MongoDB,</span>
        <span>Express.js, </span>
        <span>React.js, </span>
        <span>and </span>
        <span>Node.js</span>        
       ), I enjoy building seamless user experiences and efficient server-side logic. My journey in web development has equipped me with the skills to handle complex projects, including <span>API integration</span>, <span>database management ,</span> and UI/UX design using technologies like <span>Tailwind CSS.</span></p>
  )
}

export default AboutContentParagraph2