'use strict';

{
  // オブジェクトのキーについて
  const interests = 'interests';

  const person = {
    name: 'makoto',
    age: 234234,
    greeting: function () {
      return 'greeting return';
    },
    // 予約後をキーに持てる
    const: 'const',
    // 文字列（スペース含む）をキーにモテる
    'current city': 'Tokyo',
    // 数字をキーにもてる（配列と同じイメージ）
    3: 3,
    // 少数をキーにモテる
    3.1: 3.1,
    // 文字列形式でマイナス数字をキーにモテる
    '-3': -3,
    // キーを動的に指定可能
    [interests]: ['music', 'travel'],
  };

  // オブジェクトも配列と同じようなキー指定で値を取得出来る
  console.log(person['current city']);
  console.log(person[3]);
  console.log(person[3.1]);
  console.log(person['-3']);
  console.log(person[interests]);
  console.log(person['greeting']());


  // オブジェクトのキー（文字列）を取得する（その1）
  for (let key in person) {
    console.log(key);
    console.log(typeof key);
  }

  console.log('----------');

  // オブジェクトのキー（文字列）を取得する（その2） // Object.keys()はキーの配列
  for (let key of Object.keys(person)) {
    console.log(key);
  }

  // オブジェクトのキーを配列で取得する
  console.log(Object.keys(person));

  // オブジェクトの値を配列で取得する
  console.log(Object.values(person));

  // オブジェクトのキーと値を合わせて配列で取得する
  console.log(Object.entries(person));

  // オブジェクトのプロパティを削除
  delete person.name;
  console.log(person);

  // オブジェクトプロパティの省略記法
  const name = 'エスプレッソ';
  const size = 'large';
  const coffee = {
    name, // name: name,
    size, // size: size,
  };
  console.log(coffee);

  // スプレッド構文（）
  const coffee2 = { ...coffee }; // 新たにオブジェクト作成してスプレッド構文でオブジェクトプロパティをまるごとコピーする
  console.log(coffee2 === coffee); // ↑上記の通りでメモリアドレスが異なるので、falseが返ってくる // false
  const coffee3 = coffee; // オブジェクトが格納されているメモリアドレスを代入している
  console.log(coffee3 === coffee); // オブジェクトのメモリアドレスが同じなので、結果trueが返ってくる // true
}
