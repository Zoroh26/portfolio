import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/SVG/logo.svg';
import '../globals.css';

const classes = {
  Main: 'relative w-full z-10 flex items-center justify-between px-2 -mb-20',
  nav: 'w-full h-full flex items-center justify-between py-4 px-4',
  Logo: 'w-[4vw] h-[4vw] p-1',
  NavItems: 'flex items-center justify-between gap-8 mr-8',
  list: 'text-[11px] uppercase font-normal tracking-tight navlist text-[#333333]',
};

const Navbar = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.nav}>
        <div className={classes.Logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={classes.NavItems}>
          <div className={classes.list}>
            <Link href="/about">about</Link>
          </div>
          <div className={classes.list}>
            <Link href="/projects">projects</Link>
          </div>
          <div className={classes.list}>
            <Link href="/contact">contact</Link>
          </div>
          <div className={classes.list}>
            <Link href="/blog">blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;