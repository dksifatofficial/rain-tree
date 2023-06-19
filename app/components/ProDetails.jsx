
import classes from "../css/ProDetails.module.css";

function ProDetails({ children }) {


  return (
    <div className={classes.container}>
      <div className={classes.text}>{children}</div>
    </div>
  );
}

export default ProDetails;
