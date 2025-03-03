"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/SVG/logo.svg';
import '../globals.css';
import { motion } from 'framer-motion';

const classes = {
  Main: 'relative w-full z-10 flex items-center justify-between px-2 -mb-20',
  nav: 'w-full h-full flex items-center justify-between py-4 px-4',
  Logo: 'w-[4vw] h-[4vw] p-1',
  NavItems: 'flex items-center justify-between gap-8 mr-8',
  list: 'text-[13px] uppercase relative block whitespace-nowrap overflow-hidden font-normal tracking-tight navlist text-[#333333]',
};
const STAGGER=0.025;
const DURATION=0.25;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      transition={{ staggerChildren: 0.2 }}
      className={classes.list}
      style={
        {lineHeight:0.9}
      }
      href={href}>
    <div>
       {children.split("").map((letter, index) => {
        return <motion.span 
        variants={{
          initial:{y:0},
          hovered:{y:"-100%"},
        }}
        transition={{
          duration: DURATION,
          ease:"easeInOut",
          delay:STAGGER*index,
        }}
        className="inline-block"
        key={index}>{letter}</motion.span>
       })}
       </div>
       <div className="absolute inset-0">
       {children.split("").map((letter, index) => {
        return <motion.span 
        variants={{
          initial:{y:"100%"},
          hovered:{y:0},
        }}
        transition={{duration: DURATION,
          ease:"easeInOut",
          delay:STAGGER*index,}}
        className="inline-block"
         key={index}>{letter}</motion.span>
       })}
       </div>
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.nav}>
        <div className={classes.Logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={classes.NavItems}>
          <FlipLink href="/about">About</FlipLink>
          <FlipLink href="/projects">Projects</FlipLink>
          <FlipLink href="/contact">Contact</FlipLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;