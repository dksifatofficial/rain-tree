import Link from "next/link";
import classes from "../css/Footer.module.css";
import Socialicon from "./Socialicon";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.tags}>
        <Link href="#">Theme repository</Link>
        <Link href="#">Releases</Link>
        <Link href="#">Wiki</Link>
        <Link href="#">Issue</Link>
      </div>
      <div className={classes.icons}>
        <Socialicon />
      </div>
      <div className={classes.textur}>
        <h4>
          Rain Tree © 2023 . Published with{" "}
          <Link href="#" style={{ color: "white" }}>
            {" "}
            StarLink
          </Link>
        </h4>
        <h4>
          JavaScript license information
        </h4>
      </div>
    </div>
  );
}

export default Footer;
