"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import classes from "../css/Header.module.css";
import Socialicon from "./Socialicon";

function Header() {
  const pathname = usePathname();


  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link className={classes.homeLogo} href="/">
          <FaHome />
        </Link>
        <Link href="/">Rain Tree</Link>
      </div>
      <div className={classes.menu}>
        <Link
          href="/author"
          className={pathname == "/author" ? "active": ""}
        >
          Author
        </Link>
        <Link href="/aboutus">About Us</Link>
        <Link href="/newsletter">Newsletter</Link>
        <Link href="/news">News section</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
      <div className={classes.icons}>
        <Socialicon />
      </div>
    </div>
  );
}

export default Header;
