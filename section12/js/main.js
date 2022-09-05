'use strict';

{
  // primitive値はどのようにオブジェクトとして扱われるか
  let count = 1.23456;
  let result = count.toFixed(2); // 小数点2桁まで // new Number(count).toFixed(2)と同じ
  console.log(result);
  let userInput = 'hello';
  result = userInput.toUpperCase(); // 小文字を大文字に変換 // new String(userInput).toUpperCase()と同じ
  console.log(result);
  let hello = new String('hello'); // ラッパーオブジェクト
  console.log(hello);

  console.log(1 + {});
  // ラッパーオブジェクトがprimitive値に絡む場合
  console.log(1 + new Number(20));
  console.log(1 + new String('hello'));
}