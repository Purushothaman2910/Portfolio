import React, { useEffect, useRef, useState }  from 'react'
import '../assets/css/Home.css'
import { InviewPortListener } from '../utils'

function Home() {
  let [visible , setVisible] = useState(false)
  let ref = useRef(null)
  let viewListener = new InviewPortListener(setVisible , ref)
  useEffect(()=>{
    viewListener.Observe()
    return viewListener.unObserve()
  } ,[])
  return (
    <div className={`homeDiv ${(visible)? "animateFromBottom" :"" }`} ref={ref}>
      <p>I am Purushothaman</p>
      <p>I'm <span>Batman</span> Developer</p>
    </div>
  )
}

export default Home