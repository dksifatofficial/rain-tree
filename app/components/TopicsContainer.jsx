import Image from "next/image";
import Link from "next/link";
import classes from "../css/TopicsContainer.module.css";
import Rating from "./Rating";
import TopicBox from "./TopicBox";
import TopicFirst from "./TopicFirst";

function TopicsContainer() {
  return (
    <div className={classes.container}>
      <TopicFirst>
        <Link href="/cooking" target="_blank">
          <div className={classes.boxHeader}>
            <h6>Cooking</h6>
            <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
          </div>
          <div className={classes.section2}>
            <h5>2 years ago</h5>
            <Rating inactiveColor={"#fff"} size={20} />
          </div>
        </Link>
      </TopicFirst>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/2.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/4.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/9.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/10.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/5.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/8.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/2.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/4.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/5.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating />
        </div>
      </TopicBox>

      <TopicBox>
        <Link href="/cooking" target="_blank">
          <Image src="/image/8.jpg" alt="food" width="300" height="200" />
          <h6>Cooking</h6>
          <p>Lorem ipsum dolor sit, amet consec tetur adipisicing elit.</p>
        </Link>
        <div className={classes.section}>
          <div className={classes.date}>2 years ago</div>
          <Rating className={classes.rating} />
        </div>
      </TopicBox>
    </div>
  );
}

export default TopicsContainer;
