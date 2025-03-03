"use client";
import React from 'react'
import {motion} from 'framer-motion'
import '../globals.css';
const classes={
    Main: 'w-full h-32 rounded-tl-3xl rounded-tr-3xl mt-16 ',
    MarqueeText: 'border-t-[1px] border-b-[1px] rotate-[-5deg] gap-8 border-[#fdf7f0] flex whitespace-nowrap overflow-hidden',
    Text:'text-[3vw] font-bold text-[#fdf7f0] rotate-8 py-2 leading-none humane tracking-wide  -mb-2',
}

const Marquee = () => {
      return (
    <div className={classes.Main}>
        <div className={classes.MarqueeText}>
            <motion.div className={classes.Text} animate={{ x: [-1000, 0, 1000] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>Welcome to my portfolio</motion.div>
            <motion.div className={classes.Text} animate={{ x: [-1000, 0, 1000] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>Welcome to my portfolio</motion.div>
            <motion.div className={classes.Text} animate={{ x: [-1000, 0, 1000] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>Welcome to my portfolio</motion.div>
            <motion.div className={classes.Text} animate={{ x: [-1000, 0, 1000] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>Welcome to my portfolio</motion.div>
      
           </div>
    </div>
  )
}

export default Marquee