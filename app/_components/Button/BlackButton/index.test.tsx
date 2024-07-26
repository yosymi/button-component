import React from "react";
import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BlackButton } from "@/app/_components/Button/BlackButton";

// 【テストケース１】buttonとしてレンダリングできる
test("BlackButtonはbuttonとしてレンダリングできる。", () => {
  render(<BlackButton />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース２】Linkとしてレンダリングできる
test("BlackButtonはリンクとしてレンダリングできる。", () => {
  render(<BlackButton href="https://www.google.com/" />);
  const buttonElement = screen.getByRole("link");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース３】form内のbuttonとしてレンダリングできる
test("BlackButtonはform内のbuttonとしてレンダリングできる。", () => {
  render(<BlackButton type="submit" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

// 【テストケース４】ボタンのラベルが外部から指定できる
test("BlackButtonのラベルは外部から指定できる。", () => {
  render(<BlackButton>ボタン</BlackButton>);
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
  render(<BlackButton onClick={countUp} />);
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
// test("BlackButtonの色", () => {
//   render(<BlackButton />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toHaveStyle("background-color: black");
// });

// 【テストケース７】ホバー時の状態
/* 
CSS modulesで適用したスタイルの場合
background-color: ButtonFace;
となるためテスト未実施 
*/
// test("BlackButtonのホバー時の状態", () => {
//   render(<BlackButton />);
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
// test("BlackButtonのフォーカス時の状態", () => {
//   render(<BlackButton />);
//   const buttonElement = screen.getByRole("button");
//   buttonElement.focus();
//   expect(buttonElement).toHaveStyle("background-color: #ff7f50");
// });
