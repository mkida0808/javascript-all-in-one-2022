'use strict';

{
  // 演算子の本質（論理和）
  const test1 = 'hello' || 'hello2'; // 'hello' is true, 'hello2' is true.
  console.log(test1);  // test1 is 'hello'

  const test2 = 'hello' || ''; // 'hello' is true, '' is false.
  console.log(test2);  // test2 is 'hello'

  const test3 = '' || 'hello2'; // '' is false, 'hello2' is true.
  console.log(test3);  // test3 is 'hello2'

  const test4 = '' || false; // '' is false, false is false.
  console.log(test4);  // test3 is false

  // 演算子の本質（論理積）
  const test5 = 'hello' && 'hello2'; // 'hello' is true, 'hello2' is true.
  console.log(test5);  // test1 is 'hello2'

  const test6 = 'hello' && 0; // 'hello' is true, '' is false.
  console.log(test6);  // test2 is 0

  const test7 = 0 && 'hello2'; // '' is false, 'hello2' is true.
  console.log(test7);  // test3 is 0

  const test8 = 0 && false; // '' is false, false is false.
  console.log(test8);  // test3 is 0

  // Null合体演算子
  const test9 = false ?? 'user'; // falseはnullでもundefinedでもないので、''がtest9に代入される。
  console.log(test9);  // ''

  const test10 = null ?? 'user'; // nullはnull合体演算子の評価基準員合うので、'use'がtest10に代入される。
  console.log(test10);  // ''

  // for-of文で配列の要素ごとにループをする
  const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
  for (const fruit of fruits) {
    console.log(fruit);
  }

  // for-in文でオブジェクトのプロパティごとにループする
  const coffee = {
    name: 'Caffe Latte',
    size: 30,
    isHot: true,
  }
  for (const key in coffee) {
    console.log(key);
    console.log(coffee[key]);
  }
}