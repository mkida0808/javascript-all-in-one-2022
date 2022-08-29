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
}