import classes from "../css/Subscrib.module.css";

function Subscribe() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>Subscribe to our newsletter</h1>
        <h4>Get the latest posts delivered right to your inbox.</h4>
      </div>
      <div className={classes.form}>
        <form action="/action-page.php" autoComplete="on">
          <input
            className={classes.mail}
            type="email"
            placeholder="Your email address"
            required
          />
          <br />
          <button className={classes.button}>
            <b>Subscribe</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
