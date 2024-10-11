import React , {useEffect , useRef, useState} from 'react'
import { InviewPortListener } from '../../utils'

function AboutContentParagraph1() {
  let paraDivRef = useRef(null)
  let [visible , setVisible] = useState(false)
  let viewPortListener = new InviewPortListener( setVisible , paraDivRef )

  useEffect(()=>{
    viewPortListener.Observe() ;
    return viewPortListener.unObserve()
  },[])

  return (
    <p className={`animate ${ (visible) ? 'animateFromLeft' : '' }`} ref={paraDivRef}>
        Hello! I'm Purushothaman, a passionate Full Stack Developer with experience in creating dynamic, responsive web applications.
    </p>
  )
}

export default AboutContentParagraph1