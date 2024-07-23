import styles from "./page.module.css";
import {
  BlackButton,
  WhiteButtonOutline,
  WhiteButton,
} from "@/app/_components/Button";

export default function Home() {
  return (
    <div>
      <div className={styles.button_size}>
        <BlackButton>編集</BlackButton>
      </div>
      <br />
      <div className={styles.button_size}>
        <WhiteButtonOutline>編集</WhiteButtonOutline>
      </div>
      <br />
      <div className={styles.button_size}>
        <WhiteButton>編集</WhiteButton>
      </div>
    </div>
  );
}
