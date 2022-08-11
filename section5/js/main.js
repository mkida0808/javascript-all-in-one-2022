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
}