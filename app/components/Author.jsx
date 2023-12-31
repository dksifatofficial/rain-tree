import Image from "next/image";
import classes from "../css/Author.module.css";

function Author() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.boxImg}>
        <Image src="/image/DKsifat.jpg" alt="" height="400" width="400" />
        </div>
        <div className={classes.boxText}>
          <h1>Aminul Kibria - DK Sifat</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing, elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Author;
