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

  /* items配列を直接編集するメソッド（開始） */
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
  /* items配列を直接編集するメソッド（終了） */

  /* items配列を直接編集せずに新しく配列を作る（返す）メソッド（開始） */
  // sliceメソッド
  items = [0, 1, 2, 3, 4, 5];
  let result = items.slice(2, 4);
  console.log(result);

  // concatメソッド
  items = [0, 1, 2, 3];
  result = items.concat([10, 11, 12, 13], 20, 21, [30, 31, 32], 40); // 配列の形でも引数の形として渡しても良い
  // result = items.concat(4, 5, 6, 7, 8, 9, 10); // 配列の形でも引数の形として渡しても良い
  console.log(result);

  // joinメソッド
  items = ['a', 'b', 'c'];
  result = items.join('-'); // 配列の全ての要素を1つの文字列として結合する。引数に要素と要素とを結合したい文字を入れる、
  console.log(result);

  // indexOfメソッド
  items = ['apple', 'banana', 'orange', 'banana'];
  // result = items.indexOf('banana', 2); // 配列要素の最初から対象文字列を検索して文字列があればその文字列のインデックスが返る
  result = items.lastIndexOf('banana'); // 配列要素の最後から対象文字列を検索して文字列があればその文字列のインデックスが返る
  result = items.includes('banana'); // 対象の文字列が配列に入っていたらtrue, そうでなければfalse
  console.log(result);

  // mapメソッド
  items = [0, 1, , 2];
  console.log(items);
  result = items.map((item, index, array) => { // 配列の各要素を関数で変換して新たな配列を返す
    console.log(item, index, array);
    return item * 10;
  });
  console.log(result);

  // flatメソッド
  items = [0, 1, [2, [3, [4]]]];
  result = items.flat(3); // ネストした配列を1つの配列に変換する。flatの引数は何段階のネストをしていするかを整数で入力する default= 1
  console.log(result);

  // flatMapメソッド
  items = [0, 1, 2];
  result = items.map((item) => [item, item * 10]);
  console.log(result);
  result = result.flat();
  console.log(result);
  result = items.flatMap((item) => [item, item * 10]); // flatMap = map + flatを実行している

  // filterメソッド
  items = [0, 1, 2, , , , 3, 4, 5, 6];
  result = items.filter((item) => {
    return item % 2 === 0; // return でtrueまたはfalseを返す（今回はtrue判定された要素だけで新たな配列が作成される）
  });
  console.log(result);

  // reduceメソッド reduceRightメソッド
  items = [1, 2, , , 3];
  result = items.reduce((previousItem, item) => {
  // result = items.reduceRight((previousItem, item) => {
    return previousItem + item;
  }, 0);
  console.log(result);

  // findメソッド findIndexメソッド
  items = ['apple', , , 'banana', 'grape', 'banana'];
  result = items.find((item) => { // 配列の特定要素（文字列）を見つけてtrueならばその要素の文字列を返す
  // result = items.findIndex((item) => { // 配列の特定要素（文字列）を見つけてtrueならばその要素インデックスを返す
    console.log(item);
    return item === 'banana';
  });
  console.log(result);

  /* items配列を直接編集せずに新しく配列を作る（返す）メソッド（終了） */
}
