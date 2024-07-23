"use client";

import { useState } from "react";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const loadingLabel = "Loading";

// 黒いボタンコンポーネント
export function BlackButton({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <button
      onClick={load}
      className={`${styles.button} ${styles.button_black}`}
    >
      <div className={styles.flex}>{loading ? loadingLabel : children}</div>
    </button>
  );
}

// 白いボタンコンポーネント（枠線あり）
export function WhiteButtonOutline({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <button
      onClick={load}
      className={`${styles.button} ${styles.button_white_outline}`}
    >
      <div className={styles.flex}>{loading ? loadingLabel : children}</div>
    </button>
  );
}

// 白いボタンコンポーネント（枠線なし）
export function WhiteButton({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <button
      onClick={load}
      className={`${styles.button} ${styles.button_white}`}
    >
      <div className={styles.flex}>{loading ? loadingLabel : children}</div>
    </button>
  );
}
