import { FaHandshake, FaList, FaHandHoldingHeart, FaIcons, FaBezierCurve, FaClipboardCheck } from "react-icons/fa";
import Box from "../components/Box";
import classes from "./styles.module.css";

function AboutUs() {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
      </div>
      <div className={classes.container2}>
        <div className={classes.boxs}>
          <Box className={classes.box1}>
            <FaHandshake className={classes.icon} />
            <h2>Finance</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className={classes.box2}>
            <FaList className={classes.icon} />
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className={classes.box3}>
            <FaHandHoldingHeart className={classes.icon} />
            <h2>Consulting</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className={classes.box4}>
            <FaIcons className={classes.icon} />
            <h2>Strategy</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className={classes.box5}>
            <FaBezierCurve className={classes.icon} />
            <h2>Clean Code</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className={classes.box6}>
            <FaClipboardCheck className={classes.icon} />
            <h2>Backup</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
