import classes from "../css/TopicFirst.module.css";

function TopicFirst({className, children, ...rest}) {
  return (
      <div className={classes.box} {...rest}>
        {children}
      </div>
  );
}

export default TopicFirst;