import classes from "./styles.module.css";

function News() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <span className={classes.border}></span>
        <h1>
          We are
          <br />
          <span>Coming soon...</span>
        </h1>
        <h5>Hover me</h5>
      </div>
    </div>
  );
}

export default News;
