import classes from "../css/AuthBanner.module.css";

function AuthBanner() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>I am DK Sifat</h1>
        <h3>And I&apos;m a Web Developer</h3>
      </div>
    </div>
  );
}

export default AuthBanner;
