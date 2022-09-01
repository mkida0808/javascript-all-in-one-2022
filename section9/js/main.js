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

  const userPrototype = {
    greeting() {
      return `Hi! This is ${this.name}. I am ${this.age} years old.`;
    }
  }
  // ファクトリ関数について（クラスと比較）
  const UserFactory = (name, age) => {
    const user = Object.create(userPrototype);
    user.name = name;
    user.age = age;
    return user;
  }
  const userf1 = UserFactory('makoto', 21);
  const userf2 = UserFactory('kk', 32);
  const userf3 = UserFactory('mm', 53);
  console.log(userf1);
  console.log(userf2);
  console.log(userf3);

  // クラスについて（ファクトリと比較）
  const UserConstructor = function (name, age) { // コンストラクタ関数
    // this = Object.create(UserConstructor.prototype)
    console.log('*************************');
    console.log(new.target);
    console.log('*************************');
    if (new.target === undefined) {
      return new UserConstructor(name, age);
    }
    this.name = name;
    this.age = age;
    // return this
  }
  UserConstructor.prototype.greeting = function () {
    return `Hi! This is ${this.name}. I am ${this.age} years old.`;
  }
  const userc1 = UserConstructor('makoto', 30); // インスタンス
  const userc2 = new UserConstructor('kkkk', 34); // インスタンス
  const userc3 = new UserConstructor('mmmm', 23); // インスタンス
  console.log(userc1);
  console.log(userc2);
  console.log(userc3);
  // console.dir(UserConstructor);

  console.log('----------');

  // 内蔵されているコンストラクタ関数について
  const o = new Object({hi: 'hi'});
  Object.prototype.hello = 'hello';
  const a = new Array('Apple', 'Banana');
  const f = new Function('a', 'b', 'return a + b');
  console.log(o);
  console.log(a);
  console.log(f);

  console.log('----------');

  // hasOwnPropertyメソッド
  const o2 = { a: 1,};
  console.log(o2);
  console.log(o2.hasOwnProperty('a')); // プロトタイプチェーンまでは見ない
  console.log('a' in o); // プロトタイプチェーンまで見る
  console.log(Object.prototype.hasOwnProperty.call(o, 'a'));

  console.log('----------');

  // クラス構文
  class User {
    id = 120; // フィールド宣言構文 this.id = 120に近い
    #age = 0; // フィールドで#（ハッシュ）を付けると、private宣言になる
    constructor(name, age) {
      this.name = name;
      // this.age = age;
    }
    birthday = '1990/1/1'; // フィールド宣言構文 this.birthday = '1990/1/1'に近い
    greeting() {} // getterやsetterを用いるときはメソッドの頭にgetterかsetterを付ける
    post() {} // getterやsetterを用いるときはメソッドの頭にgetterかsetterを付ける
  }
  const user4 = new User('makoto22', 66);
  console.dir(User);
  console.dir(user4);

  console.log('----------');

  // クラスの継承
  class Animal {
    age = 0;
    constructor(age) {
      this.age = age;
    }
    eat() {
      console.log('eat from Animal.');
    }
  }
  class Bird extends Animal {
    name = 'pi';
    constructor(age, name) {
      super(age);
      this.name = name; // setterとしてsuper.nameとも記載できる
      // super.name = name;
    }
    eat() {
      super.eat(); // super.は
      console.log('eat from Bird.');
    }
    fly() {}
  }
  const bird = new Bird(3, 'pi2');
  bird.eat();
  console.log(bird);

  console.log('----------');
  const animalObj = {
    age: 0,
    eat() {
      console.log('eat from animal obj');
      console.log(this.age);
    },
    name: 'name',
  }
  const birdObj = {
    age: 1,
    eat() {
      console.log('eat from bird obj');
      console.log(this.age);
      super.eat();
      super.name = 'pi'; // this.nameと同じ意味になる（setterとしての動きに似ている）
      console.log(super.name);
      // console.log(super.name); // birdObj.__proto__.name === super.name
    },
  }
  const swallowObj = {
    age: 2,
    eat() {
      console.log('eat from swallow obj');
      console.log(this.age);
      super.eat();
      // console.log(super.name); // swallowObj.__proto__.eat.call(this) === super.eat()
    },
  }
  birdObj.__proto__ = animalObj;
  swallowObj.__proto__ = birdObj;
  // birdObj.eat();
  swallowObj.eat();
  console.log(birdObj);
}