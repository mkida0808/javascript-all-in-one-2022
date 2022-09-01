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

  let fruits = ['apple', , 'banana', , ,];
  fruits[2] = 'grape';
  fruits[10] = 'orange';
  for (const fruit of fruits) {
    console.log(fruit);
  }
  for (const fruit in fruits) {
    console.log(fruit);
  }
  // delete fruits[10];
  console.log(fruits); // 一連の流れから疎な配列が出来る（要素のキーの最大値＋1がlengthの長さになる）
  // fruits.length = 100;
  // fruits.length = 2;
  console.log(Array.isArray(fruits)); // 配列かどうかを判定 true ... 配列
  console.log(Array.isArray(arrayLikeObject)); // 配列かどうかを判定 false ... オブジェクトであるため

  fruits = new Array('Apple', 'Banana', 'Grape');
  fruits = new Array(1, 2, 3); // 疎な配列は作れない（関数オブジェクトの引数であるため）
  fruits = new Array(5); // 数字1つの要素であれば空要素を5つ作るだけの配列になる
  fruits = new Array('hello');

  fruits = new Array('Apple', 'Banana', 'Grape');
  fruits = new Array(1, 2, 3);
  fruits = new Array(5); // 5という要素1つの配列が出来る
  fruits = new Array('hello');
  console.log(fruits);


  console.log('-----');


  // スプレッド構文で配列を展開する
  fruits = ['apple', 'banana', 'grape'];
  const newFruits = ['peach', ...fruits, 'mango'];
  fruits.push('orange');
  console.log(newFruits, fruits); // peach, apple, banana, grape, mango // apple, banana, grape, orange

  let sum = (...nums) => {
    // 関数オブジェクトの引数にはレストパラメーター
    console.log(nums);
  };
  let nums = [1, 2, 3, 4];
  sum(...nums, 5, 6, ...[7, 8], 9); // 配列の要素をスプレッド構文で関数オブジェクトに展開する


  console.log('-----');


  // 配列の分割代入
  const makoto = ['makoto', 123];
  let [name, age] = makoto; //  分割代入
  console.log(name, age);

  const makoto2 = ['mmmkkk', 234, 'man', ['music', 'travel'], {first: 'mmm', last: 'kkk'}];
  let [, , gender, [music, travel], {first}] = makoto2;

  console.log(gender, music, travel, first);

  let userObject = { hobbies: ['music', 'travel']};
  let {
    hobbies: [, travelObject],
  } = userObject;
  console.log(travelObject);


  console.log('-----');


  // 配列を変更する4つのメソッド
  let items = [0, 1, 2];
  items.push(3, 4); // 配列要素の末尾に追加
  items.pop(); // 配列末尾の要素1つを削除
  items.unshift(-2, -1); // 配列最初の要素を追加
  items.shift(); // 配列最初の要素を削除
  console.log(items);


  console.log('----------');


  // オブジェクトのpush, pop, unshift, shift
  arrayLikeObject = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
  }
  Array.prototype.push.call(arrayLikeObject, 3); // push, popは(length-1)の要素を基準に処理を行う
  Array.prototype.pop.call(arrayLikeObject); // push, popは(length-1)の要素を基準に処理を行う
  Array.prototype.unshift.call(arrayLikeObject, -1); // オブジェクトのunshift, shiftは内部で場合分けして要素が移動する
  Array.prototype.shift.call(arrayLikeObject);
  console.log(arrayLikeObject);


  console.log('----------');


  // Array.from
  const realArray = Array.from(arrayLikeObject);
  console.log(realArray, arrayLikeObject);


  console.log('----------');


  // spliceメソッド
  items = [0, 1, 2];
  items.splice(1, 1, 9, 8, 7);  // spliceメソッドで配列の要素を自由に追加削除など可能
  console.log(items);

  // fillメソッド
  items = [0, 1, 2, 3, 4, 5];
  items.fill(0, 3, 5); // 既存の配列の要素が全て0に置き換わる
  console.log(items);

  // copyWithinメソッド
  items = [0, 1, 2, 3, 4, 5];
  items.copyWithin(0, 2, 4); // 既存配列の要素数の範囲で要素のコピー＆貼り付けを行う（要素数がはみ出た場合はその分は追加されない）
  console.log(items);

  // reverseメソッド
  items = [0, 1, 2, 3, 4, 5];
  items.reverse();
  console.log(items);

  // sortメソッド
  items = [0, 10, undefined,  1, , , , 2, undefined, 4];
  items.sort(); // 配列の要素を文字列を解釈して文字列順に並び替える
  items.sort((a, b) => { // 明示的に配列要素の並び順を決める場合関数オブジェクトを指定する
    console.log(a, b);
    return a - b;
  });
  console.log(items);
}
