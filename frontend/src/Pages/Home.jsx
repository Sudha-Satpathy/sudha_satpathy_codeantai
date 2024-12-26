import React from 'react'
import Navbar from '../components/Navbar'
import RepoList from '../components/RepoList'

const Home = () => {
  return (
    <div className='md:flex gap-2'>
        <Navbar/>
        <RepoList/>
    </div>
  )
}

export default Home