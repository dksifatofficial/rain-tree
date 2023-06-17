import classes from "../css/TopicBox.module.css";

function TopicBox({className, children, ...rest}) {
  return (
      <div className={classes.box} {...rest}>
        {children}
      </div>
  );
}

export default TopicBox;
