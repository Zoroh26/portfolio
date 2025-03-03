import React from 'react';
import Hero from '../components/hero';
import Marquee from '../components/marquee';
import '../globals.css';

const classes = {
  main: 'w-full min-h-screen ',
};

const Landing = () => {
  return (
    <div className={classes.main}>
    <Hero/>
 
    </div>
  );
};

export default Landing;