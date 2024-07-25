"use client";

import styles from "./index.module.css";
import { Button } from "@/app/_components/Button";

type Props = {
  type?: string;
  href?: string;
  target?: string;
  onClick?: () => Promise<void>;
  children?: React.ReactNode;
};

// 黒いボタンコンポーネント
export const BlackButton = ({
  type = "",
  href = "",
  target = "_blank",
  onClick,
  children,
}: Props) => {
  return (
    <Button
      type={type}
      href={href}
      target={target}
      buttonStyles={styles}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default BlackButton;
