import React from 'react'
import Stat from './Stat'
import SignUp from './SignUp'

const Stats = () => {
  return (
    <div className=' md:flex gap-2 h-screen'>
        <Stat/>
        <SignUp/>
    </div>
  )
}

export default Stats