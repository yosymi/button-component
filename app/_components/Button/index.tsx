"use client";

import { useState, Component } from "react";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  href: string;
  target: string;
  onClick: () => Promise<void>;
  children: React.ReactNode;
};

// ローディング中のボタンラベル
const loadingLabel = "Loading...";

// 黒いボタンコンポーネント
export const BlackButton = ({ onClick, href, target, children }: Props) => {
  // 関数実行中のボタンラベルはローディング中とする
  const [loading, setLoading] = useState<boolean>(false);
  const load = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

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
};

// 白いボタンコンポーネント（枠線あり）
export function WhiteButtonOutline({ onClick, href, target, children }: Props) {
  // 関数実行中のボタンラベルはローディング中とする
  const [loading, setLoading] = useState<boolean>(false);
  const load = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

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
}

// 白いボタンコンポーネント（枠線なし）
export function WhiteButton({ onClick, href, target, children }: Props) {
  // 関数実行中のボタンラベルはローディング中とする
  const [loading, setLoading] = useState<boolean>(false);
  const load = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

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
}
