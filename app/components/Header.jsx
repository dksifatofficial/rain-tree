"use client";

import Link from "next/link";
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import classes from "../css/Header.module.css";
import Socialicon from "./Socialicon";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.header} ${isScrolled ? classes.scrolled : ""}`}>
      <div className={classes.logo}>
      <Link className={classes.homeLogo} href="/"><FaHome  /></Link>
        <Link href="/">Rain Tree</Link>
      </div>
      <div className={classes.menu}>
        <Link href="/author">Author</Link>
        <Link href="/newsletter">Newsletter</Link>
        <Link href="/news">News section</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/aboutus">About Us</Link>
      </div>
      <div className={classes.icons}>
        <Socialicon />
      </div>
    </div>
  );
}

export default Header;
