"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { BlackButton } from "@/app/_components/Button/BlackButton";
import { WhiteButtonOutline } from "@/app/_components/Button/WhiteButtonOutline";
import { WhiteButton } from "@/app/_components/Button/WhiteButton";

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
          type=""
          href="https://www.google.com/"
          target="_blank"
          onClick={hello}
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
          type=""
          href="https://www.google.com/"
          target="_self"
          onClick={hello}
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
          type=""
          href="https://www.google.com/"
          target="_self"
          onClick={hello}
        >
          <Image
            className={styles.image}
            src="/edit_icon_black.png"
            alt=""
            width={10}
            height={10}
          />
          編集
          <Image
            className={styles.image}
            src="/edit_icon_black.png"
            alt=""
            width={10}
            height={10}
          />
        </WhiteButton>
      </div>
    </div>
  );
}
