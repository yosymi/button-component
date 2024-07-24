"use client";

import styles from "./page.module.css";
import Image from "next/image";
import {
  BlackButton,
  WhiteButtonOutline,
  WhiteButton,
} from "@/app/_components/Button";

// ボタンクリック時に発火する外部関数（3秒待つ）
const hello = () => {
  return new Promise<void>((resolve, reject) => {
    console.log("sleeping 3 seconds");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

export default function Home() {
  return (
    <div>
      <div className={styles.button_size}>
        <BlackButton
          onClick={hello}
          href="https://www.google.com/"
          target="_blank"
        >
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
        <WhiteButtonOutline
          onClick={hello}
          href="https://www.google.com/"
          target="_self"
        >
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
        <WhiteButton
          onClick={hello}
          href="https://www.google.com/"
          target="_self"
        >
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
