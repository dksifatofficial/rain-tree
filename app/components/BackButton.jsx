"use client";

import { useRouter } from "next/navigation";
import classes from '../css/BackButton.module.css'

function BackButton() {
  const router = useRouter();

  return (
    <div className={classes.back}>
      <button type="button" onClick={() => router.back()}>
        &#8592; Back
      </button>
    </div>
  );
}

export default BackButton;
