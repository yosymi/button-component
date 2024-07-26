import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { WhiteButton } from "@/app/_components/Button/WhiteButton";

// 【テストケース１】buttonとしてレンダリングできる
test("WhiteButtonはbuttonとしてレンダリングできる。", () => {
  render(<WhiteButton />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース２】Linkとしてレンダリングできる
test("WhiteButtonはリンクとしてレンダリングできる。", () => {
  render(<WhiteButton href="https://www.google.com/" />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース３】form内のbuttonとしてレンダリングできる
test("WhiteButtonはform内のbuttonとしてレンダリングできる。", () => {
  render(<WhiteButton type="submit" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース４】ボタンのラベルが外部から指定できる
test("WhiteButtonのラベルは外部から指定できる。", () => {
  render(<WhiteButton>ボタン</WhiteButton>);
  const buttonElement = screen.getByText("ボタン");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース５】ボタンクリック時の関数が外部から指定できる
test("BlackButtonのボタンクリック時の関数は外部から指定できる。", () => {
  let count = 0;
  const countUp = () => {
    return new Promise<void>((resolve, reject) => {
      count += 1;
      resolve();
    });
  };
  render(<WhiteButton onClick={countUp} />);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(count).toBe(1);
});

// 【テストケー６】ボタンの色
/* 
CSS modulesで適用したスタイルの場合
background-color: ButtonFace;
となるためテスト未実施 
*/
// test("WhiteButtonの色", () => {
//   render(<WhiteButton />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toHaveStyle("background-color: black");
// });

// 【テストケース７】ホバー時の状態
/* 
CSS modulesで適用したスタイルの場合
background-color: ButtonFace;
となるためテスト未実施 
*/
// test("WhiteButtonのホバー時の状態", () => {
//   render(<WhiteButton />);
//   const buttonElement = screen.getByRole("button");
//   userEvent.hover(buttonElement);
//   expect(buttonElement).toHaveStyle("background-color: gray");
// });

// 【テストケース８】フォーカス時の状態
/* 
CSS modulesで適用したスタイルの場合
background-color: ButtonFace;
となるためテスト未実施 
*/
// test("WhiteButtonのフォーカス時の状態", () => {
//   render(<WhiteButton />);
//   const buttonElement = screen.getByRole("button");
//   buttonElement.focus();
//   expect(buttonElement).toHaveStyle("background-color: #ff7f50");
// });
