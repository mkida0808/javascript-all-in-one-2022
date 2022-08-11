'use strict';

{
  // クロージャーを用いらプライベント変数の作り方（例
  let generatePerson = (name) => {
    let age = 0;
    return {
      getName: () => name,
      getAge: () => age,
      incrementAge: () => {
        age++;
        // return age;
      },
    };
  };
  const makoto = generatePerson('makoto');
  const tom = generatePerson('tom');
  // makoto.name = 'ahoaho';
  // makoto.age = 123123;
  // console.log(makoto.incrementAge());
  makoto.incrementAge();
  makoto.incrementAge();
  console.log(makoto.getAge());
  console.log(makoto.getName());

  tom.incrementAge();
  tom.incrementAge();
  tom.incrementAge();
  tom.incrementAge();
  console.log(tom.getAge());
  console.log(tom.getName());

  // ブウランザー上でのクロージャーの挙動確認
  let createCounter = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };
  const counter = createCounter();
  counter();

  // 再帰関数
  let factorial = n => n === 0 ? 1 : n * factorial(n - 1);

  console.log(factorial(3));
  console.log(factorial(5));
  console.log(factorial(0));
}
