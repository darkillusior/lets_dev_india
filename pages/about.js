import FutureGoles from '@/components/FutureGoles'
import Navbar from '@/components/Navbar'
import React from 'react'

function About({user}) {
  return (<>
    <Navbar user={user}/>
    <FutureGoles/>
    </>
  )
}

export default About