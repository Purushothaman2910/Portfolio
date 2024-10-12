import React, { useEffect, useState } from 'react'
import Router from './Router'
import { ThemeAndNavContextProvider } from './context'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from './utils'

function Portfolio() {
  let [showNav , setShowNav] = useState(false)
  let location = useLocation()
  function toggleNav(){
    setShowNav((prevalue)=> !prevalue)
  }
  useEffect(()=>{
    scrollToTop()
  } , [location.pathname])
  return (
    <>
      <ThemeAndNavContextProvider value={{ showNav , toggleNav}}>      
        <Router />
      </ThemeAndNavContextProvider>
    </>
  )
}

export default Portfolio