import React, { useEffect, useRef, useState } from 'react'
import { InviewPortListener } from '../../utils'

function SkillsCard({ title , logo , content , index }) {
    let [headindVisible , setHeadingVisible] = useState(false)
    let [cardVisible , setCardVisible] = useState(false)
    let headingRef = useRef(null)
    let cardRef = useRef(null)
    let headinListener = new InviewPortListener(setHeadingVisible , headingRef)
    let contentlistener = new InviewPortListener(setCardVisible , cardRef )
    useEffect(()=>{
        headinListener.Observe()
        contentlistener.Observe()
        return () =>{
            headinListener.unObserve()
            contentlistener.unObserve()
        }
    } ,[])
  return (
    <div className='skillsCardContainer'>
    <p ref={headingRef} className={`skillHeading animate ${(headindVisible)? "animateFromLeft" : ""}`}>{title}</p>
    <div ref={cardRef} className={`skillsCard  ${ (cardVisible) ? "animateFromRight" : ""}`}>
        <div className="skillsContent">
            <p>{content}</p>
        </div>
        <div className="skillsImage">
            <img src={logo} alt="" />
        </div>
    </div>
    </div>
  )
}

export default SkillsCard