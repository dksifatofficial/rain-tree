import classes from "../css/Banner.module.css";

function Banner() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h1>Rain tree</h1>
        <h3>We serve anything what you need.</h3>
        <button className={classes.button}>
          <span>Subscribe </span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
