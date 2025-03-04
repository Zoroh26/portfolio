import React from 'react'
import '../globals.css';

const classes = {
  main: 'flex flex-col h-screen w-full items-center justify-center ',
  Introduction: 'w-full lg:h-screen h-full flex flex-col items-center justify-center -mt-12',
  Name: 'Name font-bold md:text-[15vw] text-[22vw] text-[#333333]  tracking-tight',
  Line1:'absolute left-0  w-1/12 h-[1px] bg-[#333333] mt-4 hidden md:block',
  Line2:'absolute right-0 w-1/12 h-[1px] bg-[#333333] mt-4 hidden md:block',
};

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.Introduction}>
        <div className={classes.Name}>ROHITH</div>
        <div className={classes.Line1}></div>
        <div className={classes.Line2}></div>
      </div>
      
    </div>
  )
}

export default Hero
