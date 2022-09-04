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
}