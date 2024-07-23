import styles from "./page.module.css";
import Image from "next/image";
import {
  BlackButton,
  WhiteButtonOutline,
  WhiteButton,
} from "@/app/_components/Button";

export default function Home() {
  return (
    <div>
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
      <br />
      <div className={styles.button_size}>
        <WhiteButtonOutline>
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
        <WhiteButton>
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
