'use strict';

{
  const obj = {
    a: 1,
    b: 2,
  };
  obj.__proto__ = {
    c: 3,
  };
  Object.setPrototypeOf(obj, {  // objプロトタイプに新規でプロパティを変更、追加する
    c: 3,
    d: 4,
  });
  console.log(Object.getPrototypeOf(obj)); // objプロトタイプのプロパティが見れる

  console.log('----------');

  const obj2 = Object.create({ c: 7,}, { // obj2新規オブジェクトを作成して、プロトタイプに新規プロパティを追加する
    d: {
      value: 8,
      enumerable: true,
      configurable: true,
      writable: true,
    }

  });
  obj2.a = 5;
  obj2.b = 6;
  console.log(obj2);
  for (const key in obj2) { // keyはプロトタイプのプロパティkeyまでループ検索する（結論：for-inループはほとんど使われない）
    console.log(key);
  }
  console.log('---');
  console.log(Object.keys(obj2)); // keyはプロトタイプのプロパティkeyまではループ検索しない

  console.log('---');
  for (const key of Object.keys(obj2)) { // keyはプロトタイプのプロパティkeyまではループ検索しない
    console.log(key);
  }

  console.log('----------');

  // ファクトリ関数について（クラスと比較）
  const UserFactory = (name, age) => {
    return {
        name,
        age,
        greeting() {},
    };
  }
  const userf1 = UserFactory('makoto', 21);
  const userf2 = UserFactory('kk', 32);
  const userf3 = UserFactory('mm', 53);
  console.log(userf1);
  console.log(userf2);
  console.log(userf3);

  // クラスについて（ファクトリと比較）
  const UserConstructor = function (name, age) { // コンストラクタ関数
    // this = {}
    this.name = name;
    this.age = age;
    this.greeting = function () {};
    // return this
  }
  const userc1 = new UserConstructor('makoto', 30); // インスタンス
  const userc2 = new UserConstructor('kkkk', 34); // インスタンス
  const userc3 = new UserConstructor('mmmm', 23); // インスタンス
  console.log(userc1);
  console.log(userc2);
  console.log(userc3);
}