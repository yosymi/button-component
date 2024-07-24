"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  type?: string;
  href?: string;
  target?: string;
  onClick?: () => Promise<void>;
  children?: React.ReactNode;
};

// ローディング中のボタンラベル
const loadingLabel = "Loading...";
let load: any;

// 黒いボタンコンポーネント
export const BlackButton = ({
  type = "",
  href = "",
  target = "_blank",
  onClick,
  children,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  // 関数を指定する場合、実行中のボタンラベルはローディング中とする
  if (onClick !== undefined) {
    load = async () => {
      setLoading(true);
      await onClick();
      setLoading(false);
    };
  }

  // ボタンのtypeをsubmitに指定してフォームボタンとして使用する場合
  if (type === "submit") {
    return (
      <button type="submit" className={styles.button}>
        {children}
      </button>
    );
  }
  // URLを指定してリンクボタンとして使用する場合
  else if (href) {
    return (
      <Link href={href} target={target}>
        <button
          onClick={load}
          className={`${styles.button} ${styles.button_black}`}
        >
          <div className={styles.flex}>{loading ? loadingLabel : children}</div>
        </button>
      </Link>
    );
  }
  // 通常のボタンとして使用する場合
  else {
    return (
      <button
        onClick={load}
        className={`${styles.button} ${styles.button_black}`}
      >
        <div className={styles.flex}>{loading ? loadingLabel : children}</div>
      </button>
    );
  }
};

// 白いボタンコンポーネント（枠線あり）
export function WhiteButtonOutline({
  type = "",
  href = "",
  target = "_blank",
  onClick,
  children,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  // 関数を指定する場合、実行中のボタンラベルはローディング中とする
  if (onClick !== undefined) {
    load = async () => {
      setLoading(true);
      await onClick();
      setLoading(false);
    };
  }

  // ボタンのtypeをsubmitに指定してフォームボタンとして使用する場合
  if (type === "submit") {
    return (
      <button type="submit" className={styles.button}>
        {children}
      </button>
    );
  } else if (href) {
    return (
      <Link href={href} target={target}>
        <button
          onClick={load}
          className={`${styles.button} ${styles.button_white_outline}`}
        >
          <div className={styles.flex}>{loading ? loadingLabel : children}</div>
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={load}
        className={`${styles.button} ${styles.button_white_outline}`}
      >
        <div className={styles.flex}>{loading ? loadingLabel : children}</div>
      </button>
    );
  }
}

// 白いボタンコンポーネント（枠線なし）
export function WhiteButton({
  type = "",
  href = "",
  target = "_blank",
  onClick,
  children,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  // 関数を指定する場合、実行中のボタンラベルはローディング中とする
  if (onClick !== undefined) {
    load = async () => {
      setLoading(true);
      await onClick();
      setLoading(false);
    };
  }

  // ボタンのtypeをsubmitに指定してフォームボタンとして使用する場合
  if (type === "submit") {
    return (
      <button type="submit" className={styles.button}>
        {children}
      </button>
    );
  } else if (href) {
    return (
      <Link href={href} target={target}>
        <button
          onClick={load}
          className={`${styles.button} ${styles.button_white}`}
        >
          <div className={styles.flex}>{loading ? loadingLabel : children}</div>
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={load}
        className={`${styles.button} ${styles.button_white}`}
      >
        <div className={styles.flex}>{loading ? loadingLabel : children}</div>
      </button>
    );
  }
}
