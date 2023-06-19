import classes from "../aboutus/styles.module.css";

function Box({ children, className }) {
  return (
    <div className={classes.box}>
      <div className={classes.text}>{children}</div>
    </div>
  );
}

export default Box;
