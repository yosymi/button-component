"use client";

import styles from "./page.module.css";
import Image from "next/image";
import {
  BlackButton,
  WhiteButtonOutline,
  WhiteButton,
} from "@/app/_components/Button";

// ボタンコンポーネントで実行する関数（3秒待つ）
const hello = () => {
  return new Promise<void>((resolve, reject) => {
    console.log("sleeping 3 seconds");
    setTimeout(() => {
      console.log("After 3 seconds");
      resolve();
    }, 3000);
  });
};

export default function Home() {
  return (
    <div>
      <div className={styles.button_size}>
        <BlackButton onClick={hello}>
          <Image
            className={styles.image}
            src="/edit_icon_white.png"
            alt=""
            width={10}
            height={10}
          />
          編集
        </BlackButton>
      </div>
      <br />
      <div className={styles.button_size}>
        <WhiteButtonOutline onClick={hello}>
          編集
          <Image
            className={styles.image}
            src="/edit_icon_black.png"
            alt=""
            width={10}
            height={10}
          />
        </WhiteButtonOutline>
      </div>
      <br />
      <div className={styles.button_size}>
        <WhiteButton onClick={hello}>
          <Image
            className={styles.image}
            src="/edit_icon_black.png"
            alt=""
            width={10}
            height={10}
          />
          編集
        </WhiteButton>
      </div>
    </div>
  );
}
