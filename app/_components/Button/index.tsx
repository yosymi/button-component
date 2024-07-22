import styles from "./index.module.css";

// 黒いボタンコンポーネント
export function BlackButton() {
  return (
    <button className={`${styles.button} ${styles.button_black}`}>編集</button>
  );
}

// 白いボタンコンポーネント（枠線あり）
export function WhiteButtonOutline() {
  return (
    <button className={`${styles.button} ${styles.button_white_outline}`}>
      編集
    </button>
  );
}

// 白いボタンコンポーネント（枠線なし）
export function WhiteButton() {
  return (
    <button className={`${styles.button} ${styles.button_white}`}>編集</button>
  );
}
