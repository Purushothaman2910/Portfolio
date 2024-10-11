import React, { useEffect, useRef, useState } from 'react'
import { SchoolLogo } from '../../assets'
import { InviewPortListener } from '../../utils'

function EducationCard({index = 1 , title , image , content}) {
    let [headingVisible , setHeadingVisible] = useState(false)
    let [contentVisible , setContentVisible] = useState(false)
    let [imageVisible , setImageVisible] = useState(false)
    let headingRef = useRef(null)
    let contentRef = useRef(null)
    let imageRef = useRef(null)
    let haedingListener = new InviewPortListener(setHeadingVisible , headingRef )
    let contenListener = new InviewPortListener(setContentVisible , contentRef )
    let imageListener = new InviewPortListener(setImageVisible , imageRef )
    useEffect(()=>{
        haedingListener.Observe()
        contenListener.Observe()
        imageListener.Observe()
        return ()=>{
            haedingListener.unObserve()
            contenListener.unObserve()
            imageListener.unObserve()
        }
    } , [])
  return (
    <div className="educationContainer">
        <div className={`educationHeading animate ${(headingVisible) ? ((index % 2)=== 0) ? "animateFromLeft" : "animateFromRight" :"" }`} ref={headingRef}>
            <p>{title}</p>
        </div>
        <div>            
        <div className={`educationContent animate ${(contentVisible) ? ((index % 2)=== 0) ? "animateFromRight" : "animateFromLeft" :"" }`} ref={contentRef}>
            <p>                
            {
                content
            }
            </p>
        <div className={`educationImageContainer animate ${(imageVisible) ? "animateFromRight" :"" }`} ref={imageRef}>
            <img className={`educationImage`} src={image} alt="School logo" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default EducationCard