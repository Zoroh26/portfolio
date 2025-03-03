import React from 'react'
import Landing from './pages/landing'
import Navbar from './components/navbar'
const classes={
  main:'w-full h-screen bg-[#f0f0f0]'
}
const page = () => {
  return (
    <div className={classes.main}>
      <Navbar/>
      <Landing />
    </div>
  )
}

export default page