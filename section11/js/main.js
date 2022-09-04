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


  console.log('----------');


  // iterableオブジェクト、Symbol.iterator
  let iterableObject = {
    a: 'a',
    b: 'b',
    [Symbol.iterator]() { // iterableオブジェクト
      let count = 0;
      return { // iterator
        next() {
          count++;
          return count > 3 ? { done: true } : { value: count, done: false, }
        },
      };
    },
  }
  // for (const key in obj) {}
  for (const item of iterableObject) { // obj = iterableオブジェクトであれば良い（配列以外で）
    console.log(item);
  }
  // obj[Symbol.iterableObject]();
  let iterator = iterableObject[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  arrayLikeObject = {
    0: 'a',
    1: 'b',
    length: 2,
  }
  arrayLikeObject.__proto__ = Array.prototype;

  for (const item of arrayLikeObject) {
    console.log(item);
  }
  console.log([...arrayLikeObject, 3, 4, 5]);
  let [first, second] = arrayLikeObject;
  console.log(first, second);
  let realArray = Array.from(arrayLikeObject);
  console.log(Array.isArray(realArray));
  console.log(realArray);


  console.log('----------');


  // generator関数でiteratorを作成
  // function * generatorFunc() {
  let generatorFunc = function* () {
    let result = yield 0;
    console.log(result); // undefined
    console.log('hello');
    yield 1;
    console.log('hello2');
    yield 2;
    console.log('hello3');
    yield 3;
    console.log('hello4');
    yield* [4, 5, 6]; // yield 4; yield 5; yield 6;
    console.log('hello5');
    yield* iterableObject;
  }
  obj = {
    *g() {},
  };
  let generator = generatorFunc();
  console.log(generator);
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  for (const item of generator) {
    console.log(item);
  }

  iterableObject = {
    *[Symbol.iterator]() {
      for (let i = 4; i < 8; i++) {
        yield i;
      }
    },
  };
  for (const item of iterableObject) {
    console.log(item);
  }


  console.log('----------');


  // タグ付きテンプレート
  const myTag = (strings, name, age) => {
    // console.log(strings);
    // console.log(name);
    // console.log(age);
    return `${strings[0]}${age}${strings[2]}${strings[1]}${name}`;
  };
  let name = 'makoto';
  let age = 1234;
  // myTag`Hello! I am ${name} and ${age} years old`; // タグ付きテンプレート
  console.log(myTag`Hello! I am ${name} and ${age} years old`);
}