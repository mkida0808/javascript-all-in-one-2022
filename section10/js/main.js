'use strict';

{
  // 配列とオブジェクト, isArrayメソッド
  let arrayLikeObject = {
    0: 'apple',
    1: 'banana',
    length: 2,
  };
  arrayLikeObject.__proto__ = Array.prototype;
  // console.log(typeof fruits);
  // console.log(typeof arrayLikeObject);
  // console.log(fruits instanceof Array);
  // console.log(arrayLikeObject instanceof Array);


  console.log('-----');


  let fruits = ['apple', 'banana'];
  fruits[2] = 'grape';
  fruits[10] = 'orange';
  delete fruits[10];
  console.log(fruits);  // 一連の流れから疎な配列が出来る（要素のキーの最大値＋1がlengthの長さになる）
  fruits.length = 100;
  fruits.length = 2;
  console.log(Array.isArray(fruits)); // 配列かどうかを判定 true ... 配列
  console.log(Array.isArray(arrayLikeObject)); // 配列かどうかを判定 false ... オブジェクトであるため
}