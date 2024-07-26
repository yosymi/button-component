import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { WhiteButtonOutline } from "@/app/_components/Button/WhiteButtonOutline";

// 【テストケース１】buttonとしてレンダリングできる
test("WhiteButtonOutlineはbuttonとしてレンダリングできる。", () => {
  render(<WhiteButtonOutline />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース２】Linkとしてレンダリングできる
test("WhiteButtonOutlineはリンクとしてレンダリングできる。", () => {
  render(<WhiteButtonOutline href="https://www.google.com/" />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース３】form内のbuttonとしてレンダリングできる
test("WhiteButtonOutlineはform内のbuttonとしてレンダリングできる。", () => {
  render(<WhiteButtonOutline type="submit" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース４】ボタンのラベルが外部から指定できる
test("WhiteButtonOutlineのラベルは外部から指定できる。", () => {
  render(<WhiteButtonOutline>ボタン</WhiteButtonOutline>);
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
  render(<WhiteButtonOutline onClick={countUp} />);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(count).toBe(1);
});

// 【テストケース６】ボタンの色
/* 
CSS modulesで適用したスタイルの場合
background-color: ButtonFace;
となるためテスト未実施 
*/
// test("WhiteButtonOutlineの色", () => {
//   render(<WhiteButtonOutline />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toHaveStyle("background-color: black");
// });

// 【テストケース７】ホバー時の状態
/* 
CSS modulesで適用したスタイルの場合
background-color: ButtonFace;
となるためテスト未実施 
*/
// test("WhiteButtonOutlineのホバー時の状態", () => {
//   render(<WhiteButtonOutline />);
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
// test("WhiteButtonOutlineのフォーカス時の状態", () => {
//   render(<WhiteButtonOutline />);
//   const buttonElement = screen.getByRole("button");
//   buttonElement.focus();
//   expect(buttonElement).toHaveStyle("background-color: #ff7f50");
// });
