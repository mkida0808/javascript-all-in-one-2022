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


  console.log('----------');


  // 2進数を扱う方法
  result = (10).toString(2); // 10という10進数を2進数に変換する（ただし、文字列）
  console.log(result);
  result = Number.parseInt('1010', 2); // 1010という2進数を10進数に変換する（数値） // parseIntは小数点部分を10進数に変換することが出来ない
  console.log(result);


  console.log('----------');


  // JavaScriptで扱える正の最大数、正の最小数
  console.log(Number.MAX_VALUE); // 正の最大数
  console.log(Number.MIN_VALUE); // 正の最小数
  console.log(Number.MAX_SAFE_INTEGER);


  console.log('----------');


  // isNaN, isFinite
  console.log(Number.isNaN(NaN)); // NaNの時だけtrueになる。それ以外の数値は全てfalse
  console.log(Number.isFinite(NaN)); // NaNの時だけfalseになる。有限な数値が入れば全てtrue
}