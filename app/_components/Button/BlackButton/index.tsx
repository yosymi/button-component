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

/* 
黒いボタンコンポーネント
属性の指定はすべて任意
type: "submit"を指定することでフォームボタンとして使用可能
href: リンク先のURLを指定することでリンクボタンとして使用可能
target: リンクを開く先を指定可能
onClick: クリック時の関数を指定可能、戻り値はPromise<void>とする
children: ReactNode
*/
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
