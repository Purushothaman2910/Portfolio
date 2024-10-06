import React, { useState } from 'react'
import Router from './Router'
import { ThemeAndNavContextProvider } from './context'

function Portfolio() {
  let [showNav , setShowNav] = useState(false)
  function toggleNav(){
    setShowNav((prevalue)=> !prevalue)
  }
  return (
    <>
      <ThemeAndNavContextProvider value={{ showNav , toggleNav}}>      
        <Router />
      </ThemeAndNavContextProvider>
    </>
  )
}

export default Portfolio