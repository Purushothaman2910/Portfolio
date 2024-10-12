import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { Layout } from './components'
import { Home , About , Skills ,Contact } from './Pages' 

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />}/>
            <Route path='about' element = {<About />}/>
            <Route path='skills' element = {<Skills />}/>
            {/* <Route path='expirence' element = {<Expirence />}/> */}
            <Route path='contact' element = {<Contact />}/>
        </Route>
    </Routes>
  )
}

export default Router