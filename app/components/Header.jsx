import Link from "next/link";
import classes from '../css/Header.module.css'
import Socialicon from "./Socialicon";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
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
    </header>
  );
}

export default Header;
