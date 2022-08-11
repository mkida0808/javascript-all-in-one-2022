'use strict';

{
  // 関数はオブジェクト
  function add(a, b) {
    return a + b;
  }
  console.log(add);
  console.log(add.name);
  console.log(add.length);
  // 関数をオブジェクト形式でコンソール表示
  console.dir(add);

  // 名前付き関数式
  let sayHi = function hi() {
    return 'Hi';
  };
  console.log(sayHi());

  // 無名関数
  sayHi = function () {
    return 'Hi（無名関数）';
  };
  console.log(sayHi());

  // オブジェクトのキーの中に関数（メソッド）を書く
  const person = {
    name: 'makoto',
    sayHi: function () {
      return 'Hello（メソッド）';
    },
  };
  console.log(person.sayHi());

  // アロー関数（無名関数を書き換え）
  sayHi = () => 'Hi（無名関数からアロー関数に置き換え）';

  console.log(sayHi());

  // デフォルトパラメータ
  sayHi = (name = 'User') => `Hi, ${name}!`;
  console.log(sayHi());

  // レストパラメーター（レスト構文）
  let sum = (...nums) => {
    console.log(nums);
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4)); // sum: 10

  // コールバック関数
  let subtract = (a, b, callback) => {
    let result = a - b;
    // callback('hello again');
    callback(result);
  };
  subtract(10, 7, (result) => {
    console.log(result);
  });
}
