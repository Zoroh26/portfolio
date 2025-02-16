import React from 'react';
import Hero from '../components/hero';
import '../globals.css'
const classes={
    main:'flex flex-col h-full items-center justify-center bg-[#000000] ',
    Introduction:'w-full h-screen flex flex-col items-center justify-center ',
    Name:'Name ',
    About:'w-full h-full rounded-tl-3xl rounded-tr-3xl flex flex-col justify-start bg-[#fdf7f0] ',
    Marquee:'w-full flex flex-row '
   
}
const Landing = () => {
  return (
    <div className={classes.main}>
      <div className={classes.Introduction}>
        <div className={classes.Name}>ROHITH</div>
     </div>
     <div className={classes.About}>
     <div className={classes.Introduction}>
        <div className={classes.Marquee}>Welcome to my portfolio</div>
     </div>
     </div>
    </div>
  );
};

export default Landing;