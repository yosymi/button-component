"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { BlackButton } from "@/app/_components/Button/BlackButton";
import { WhiteButtonOutline } from "@/app/_components/Button/WhiteButtonOutline";
import { WhiteButton } from "@/app/_components/Button/WhiteButton";

// 3秒間待機する外部関数
const hello = () => {
  return new Promise<void>((resolve, reject) => {
    console.log("sleeping 3 seconds");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

// 3秒後にgoole.comを開く外部関数
const openGoogle = () => {
  return new Promise<void>((resolve, reject) => {
    const url = "https://www.google.com/";
    setTimeout(() => {
      window.open(url, "_blank");
      resolve();
    }, 3000);
  });
};

const Label = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="ボタンのラベルを入力"
        onChange={handleChange}
        maxLength={12}
      />
      <div className={styles.flex}>
        <div className={styles.button_size}>
          <BlackButton>{value}</BlackButton>
        </div>
        <div className={styles.button_size}>
          <WhiteButtonOutline>{value}</WhiteButtonOutline>
        </div>
        <div className={styles.button_size}>
          <WhiteButton>{value}</WhiteButton>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div>
      <h1>デモボタン一覧</h1>
      <ol>
        <li>ボタンのラベルはテキストのみと左右にアイコンが付く３パターン</li>
        <div className={styles.flex}>
          <div className={styles.button_size}>
            <BlackButton>
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
          <div className={styles.button_size}>
            <WhiteButtonOutline>編集</WhiteButtonOutline>
          </div>
          <div className={styles.button_size}>
            <WhiteButton>
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
        <br />
        <li>
          ボタンには「非活性」「ローディング中」「ホバー時（グレイ）」「フォーカス時（コーラル）」の４種類の状態が存在
        </li>
        <p>
          ※発火する関数に３秒間待機する関数を指定しています。
          関数を指定しない場合、「ローディング中」の状態はなし。
        </p>
        <div className={styles.flex}>
          <div className={styles.button_size}>
            <BlackButton onClick={hello}>
              <Image
                className={styles.image}
                src="/button_white.png"
                alt=""
                width={15}
                height={15}
              />
              <p>ボタン</p>
            </BlackButton>
          </div>
          <div className={styles.button_size}>
            <WhiteButtonOutline onClick={hello}>ボタン</WhiteButtonOutline>
          </div>
          <div className={styles.button_size}>
            <WhiteButton onClick={hello}>
              <p>ボタン</p>
              <Image
                className={styles.image}
                src="/button_black.png"
                alt=""
                width={15}
                height={15}
              />
            </WhiteButton>
          </div>
        </div>
        <br />
        <li>ボタンのラベルは外部から指定可能</li>
        <Label></Label>
        <br />
        <li>ボタンのクリック時に発火する関数は外部から指定可能</li>
        <p>※３秒間待機後、新規タブでgoole.comを開く関数を指定しています。</p>
        <div className={styles.flex}>
          <div className={styles.button_size}>
            <BlackButton onClick={openGoogle}>
              <Image
                className={styles.image}
                src="/chrome_white.png"
                alt=""
                width={30}
                height={30}
              />
              <p>Google</p>
            </BlackButton>
          </div>
          <div className={styles.button_size}>
            <WhiteButtonOutline onClick={openGoogle}>Google</WhiteButtonOutline>
          </div>
          <div className={styles.button_size}>
            <WhiteButton onClick={openGoogle}>
              <p>Google</p>
              <Image
                className={styles.image}
                src="/chrome_black.png"
                alt=""
                width={30}
                height={30}
              />
            </WhiteButton>
          </div>
        </div>
        <br />
        <li>ボタンの高さ、横幅は親コンポーネントから制御可能</li>
        <div className={styles.flex}>
          <div className={styles.button_small}>
            <BlackButton>小ボタン</BlackButton>
          </div>
          <div className={styles.button_medium}>
            <WhiteButtonOutline>中ボタン</WhiteButtonOutline>
          </div>
          <div className={styles.button_large}>
            <WhiteButton>大ボタン</WhiteButton>
          </div>
        </div>
        <br />
        <li>フォーム内で使用する場合、ボタンのtypeを submitに指定可能</li>
        <form className={styles.flex} action="">
          <input type="text" placeholder="１０文字以内" maxLength={10} />
          <div className={styles.button_submit}>
            <WhiteButton type="submit">送信</WhiteButton>
          </div>
        </form>
        <br />
        <li>URL（任意でtarget）を指定した場合、リンクとして使用可能</li>

        <div className={styles.flex}>
          <div className={styles.button_size}>
            <BlackButton href="https://www.google.com/">新しいタブ</BlackButton>
          </div>
          <div className={styles.button_medium}>
            <WhiteButtonOutline href="https://www.google.com/">
              新しいタブ（target指定なし）
            </WhiteButtonOutline>
          </div>
          <div className={styles.button_size}>
            <WhiteButton href="https://www.google.com/" target="_self">
              今のタブ
            </WhiteButton>
          </div>
        </div>
      </ol>
    </div>
  );
}
