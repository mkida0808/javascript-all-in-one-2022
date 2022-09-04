'use strict';

{
  // proxyメソッド
  let arrayLikeObject = {
    0:0,
    1:1,
    length:2,
  }
  arrayLikeObject = new Proxy(arrayLikeObject, {
    get (target, prop) { // 自分でgetterを作る
      if (prop in target) {
        return target[prop];
      }
      // return 'default';
      return Reflect.get(target, prop); // Reflect API
    },
    set (target, prop, value) { // 自分でsetterを作る
      target[prop] = value;
      const index = Number(prop);
      if (index >= target.length) {
        target.length = index + 1;
      }
      // return true;
      return Reflect.set(target, prop, value)
    },
  });
  arrayLikeObject[10] = 10;
  console.log(arrayLikeObject[10]);
  // console.log(arrayLikeObject.apple);

  let obj = {
    hello: 'hello',
  };
  Reflect.deleteProperty(obj, 'hello'); // Reflectのプロパティでオブジェクトを削除することが可能
  console.log(obj);
  let proxy = new Proxy(obj, {

  });
  console.log(proxy.hasOwnProperty('hello'));


  console.log('----------');


  // シンボル関数
  let symbol = Symbol.for('symbol'); // 必ず値どうしがかぶらない値を作る
  let symbol2 = Symbol.for('symbol2');
  console.log(typeof symbol);

  obj = {
    0:0,
    [symbol2]: 'banana',
  }
  obj.hello = 'hello';
  obj.hi = 'hi';
  obj[1] = 1;
  obj[symbol] = 'apple';
  console.log(obj);
  for (const key in obj) {
    console.log(key);
  }
  console.log(Object.getOwnPropertySymbols(obj));
  console.log(Reflect.ownKeys(obj)); // symbolを含めた全てのオブジェクトのプロパティ＆値を表示する
  // console.log(Symbol.keyFor(symbol));
  // console.log(symbol, symbol2)
  // console.log(symbol === symbol2);

  // Well-knownシンボル
  let items = [0, 1, 2];
  arrayLikeObject = {
    0:7,
    1:8,
    length:2,
    [Symbol.isConcatSpreadable]: true, // このプロパティがtrueならば（↓下に続く）
  };
  let result = items.concat([3, 4, 5], 6, arrayLikeObject); // （↑上の続き）オブジェクトが配列の要素として展開される（オブジェクト本体が展開されない）
  result = Array.prototype.concat.call(arrayLikeObject, items);
  console.dir(result);
}