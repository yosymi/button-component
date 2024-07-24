"use client";

import { useState, Component } from "react";
import styles from "./index.module.css";

type Props = {
  onClick: () => Promise<void>;
  children: React.ReactNode;
};

const loadingLabel = "Loading...";

// 黒いボタンコンポーネント
export const BlackButton = ({ onClick, children }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const load = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

  return (
    <button
      onClick={load}
      className={`${styles.button} ${styles.button_black}`}
    >
      <div className={styles.flex}>{loading ? loadingLabel : children}</div>
    </button>
  );
};

// 白いボタンコンポーネント（枠線あり）
export function WhiteButtonOutline({ onClick, children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const load = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
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
export function WhiteButton({ onClick, children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const load = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
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
