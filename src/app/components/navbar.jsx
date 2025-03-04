"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/SVG/logo.svg";
import logo2 from "../../../public/SVG/logo2.svg";
import { FaRegCopyright } from "react-icons/fa";
import "../globals.css";
import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const classes = {
  Main: "relative w-full z-10 flex items-center justify-between px-2 -mb-20",
  nav: "w-full h-full flex items-center justify-between py-4 px-4",
  Logo: "sm:w-[6vw] sm:h-[6vw] h-[13vw] w-[13vw] p-1 ",
  NavItems: "hidden sm:flex flex items-center justify-between gap-8 mr-8",
  list: "text-[13px] uppercase relative block whitespace-nowrap overflow-hidden font-normal tracking-tight navlist text-[#333333]",
  appDrawer: "flex flex-col w-full h-full items-center justify-start ",
  drawerHead: "w-full flex flex-row items-center justify-between px-6 py-4  ",
  drawerLinks: "flex flex-col w-full text-left text-[2.7rem] applist uppercase mt-8 px-4",
  mobileMenu: "sm:hidden fixed top-0 left-0 w-full h-full h-screen bg-[#333333]  flex flex-col z-50",
  mobileNav: "flex flex-col text-[2.9rem] h-full w-full uppercase applist text-left px-4",
  burgerIcon: "sm:hidden text-2xl cursor-pointer",
  closeIcon: "text-3xl  cursor-pointer",
  mobileHeader: "w-full flex items-center justify-between px-6 py-4  ",
  appDrawerLine1: "  w-[92%] h-0.5 bg-[#f0f0f0] mt-6",
  appDrawerLine2: "  w-[100%] h-0.5 bg-[#f0f0f0] mt-4",
  appDrawerSocials: " -mt-40 flex flex-col w-full text-left  applist uppercase mt-4 px-4",
  drawerFooter: "w-full flex flex-row items-center justify-between  py-4 mt-4 ",
  copyRight: "flex gap-1 flex-row text-[#f0f0f0] text-[0.7rem] uppercase -mt-4",
  email: "text-[#f0f0f0] text-[0.75rem] lowercase -mt-4",
};

const STAGGER = 0.025;
const DURATION = 0.25;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      transition={{ staggerChildren: 0.2 }}
      className={classes.list}
      style={{ lineHeight: 0.9 }}
      href={href}
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * index }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * index }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <FlipLink href="/blog">Blog</FlipLink>
        </div>
        <div className={classes.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={classes.mobileMenu}
      >
        <div className={classes.appDrawer}>
          <div className={classes.drawerHead}>
             <div className={classes.Logo}>
            <Image src={logo2} alt="logo"/>
          </div>
          <IoMdClose className={classes.closeIcon} onClick={() => setIsOpen(false)} />
          </div>
          <div className={classes.drawerLinks}>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </div>
          <div className={classes.appDrawerLine1}></div>
          <div className={classes.appDrawerSocials}>
          <Link href="https://www.linkedin.com/in/rohith-p-a5627a296">Linkedin</Link>
          <Link href="">Behance</Link>
          <Link href="https://github.com/Zoroh26">Github</Link>
          <Link href="https://www.instagram.com/rohith26_">Instagram</Link>
          <Link href="">Leetcode</Link>
          <Link href="">GeeksForGeeks</Link>

          <div className={classes.appDrawerLine2}></div>
          <div className={classes.drawerFooter}>
              <div className={classes.copyRight}>
              <FaRegCopyright /><p className="mt-[-2px]">2025 ROHITH</p>
              </div>
              <div className={classes.email}><a href='mailto:rohith26p@gmail.com'>rohith26@gmail.com</a></div></div>
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
