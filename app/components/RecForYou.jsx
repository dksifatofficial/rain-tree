import Image from "next/image";
import Link from "next/link";
import classes from "../css/RecForYou.module.css";
import Rating from "./Rating";
import TopicBox from "./TopicBox";

function RecForYou() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Recommended for you</h2>
      </div>

      <div className={classes.container2}>
        <TopicBox>
          <Link href="/cooking.html" target="_blank">
            <Image
              src="/image/duble-sofa.jpg"
              alt="food"
              width="300"
              height="200"
            />
            <h6>Cooking</h6>
            <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
          </Link>
          <div className={classes.section}>
            <div className={classes.date}>2 years ago</div>
            <Rating />
          </div>
        </TopicBox>

        <TopicBox>
          <Link href="/cooking.html" target="_blank">
            <Image
              src="/image/tag-beauty.webp"
              alt="food"
              width="300"
              height="200"
            />
            <h6>Cooking</h6>
            <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
          </Link>
          <div className={classes.section}>
            <div className={classes.date}>2 years ago</div>
            <Rating />
          </div>
        </TopicBox>

        <TopicBox>
          <Link href="/cooking.html" target="_blank">
            <Image
              src="/image/type-righter.jpg"
              alt="food"
              width="300"
              height="200"
            />
            <h6>Cooking</h6>
            <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
          </Link>
          <div className={classes.section}>
            <div className={classes.date}>2 years ago</div>
            <Rating />
          </div>
        </TopicBox>
      </div>
    </div>
  );
}

export default RecForYou;
