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

  // 既存オブジェクトを拡張する(Object.assign)
  const o1 = { a: 1 };
  const o2 = { a: 2, b: 2 };
  const o3 = { a: 3, b: 3, c: 3 };
  const newObj = Object.assign(o1, o2, o3); // o1アプジェクトにo2, o3のオブジェクトを結合する。返り値はo1のメモリアドレス
  console.log(o1 === newObj); // newObjはo1オブジェクトと同じメモリアドレスなので、trueが返ってくる // true

  console.log('----------');

  // 分割代入
  const book = {
    title: 'JavaScript course',
    price: 9.99,
    author: {
      firstName: 'mmmname',
      lastName: 'kkkname',
    },
    isbn: 1234567890,
    description: 'This book is about JavaScript',
  };
  // const title = book.title;
  // console.log(title);
  const {
    title: bookTitle,
    price,
    author: { firstName },
    publisher: pub = 'makoto inc',
    ...etc // スプレッド演算子と類似、残りのプロパティをオブジェクトとして入る
  } = book; // 分割代入をしている

  const sayBook = ({
    title: bookTitle,
    price,
    author: { firstName },
    publisher: pub = 'makoto inc',
    ...etc
  }) => {
    // console.log(bookTitle, price, author);
    // console.log(bookTitle, price, firstName, publisher);
    console.log(bookTitle, price, firstName, pub, etc);
  };
  sayBook(book);

  // オブジェクトプロパティの有無を調べる（in演算子）
  console.log('title' in book); // titleがundefinedの場合はundefinedとして表示される

  console.log('----------');

  // オプショナルチェーニングについて（読み込みまたは削除のみに有効）
  let user1 = undefined;
  let user2 = null;
  user1?.address; // userがundefinedかnullであれば、それ以下のプロパティやメソッドは評価しない
  user2?.address; // userがundefinedかnullであれば、それ以下のプロパティやメソッドは評価しない

  console.log('----------');

  // thisとグローバルオブジェクト
  // le - (global)
  // - global object
  // - this: global object

  // le - (sayThis())
  // outerEnv: global
  // this: strict ? undefined : global object

  // le
  // outerEnv: global
  // - this: car
  console.log(this);
  let sayThis = function () {
    console.log(this); // use strictのときはundefinedが返ってくる。use strictがない場合はグローバルオブジェクトが返ってくる
  };

  const car = {
    color: 'red',
    sayThis, // sayThis: sayThis
    changeColor: function (color) {
      // car.color = color; // これだとcarのcolorが変わる
      this.color = color; // これだとcar2のcolorが変わる
    },
  };
  const car2 = { ...car };
  car2.changeColor('white');
  // car.sayThis();
  console.log(car);
  console.log(car2);

  console.log('----------');

  {
    ('use strict');

    // thisとグローバルオブジェクト（アロー関数上では）
    // le - (global)
    // - global object
    // - this: global object

    // le - (sayThis())
    // outerEnv: global
    // (thisがなくなる)

    // le - (car.changeColor())
    // outerEnv: global
    // (thisはなくなる)

    // le - (logging())
    // outerEnv: global
    // (thisはなくなる)

    // le - (cb())
    // outerEnv: car.changeColor()
    // this: strict ? undefined : global object

    // 上記のthisとグローバルあオブジェクトをアロー関数上で実装する場合について
    let sayThis = () => {
      console.log(this); // アロー関数上ではthisが考慮されず（ここではcar）グローバルオブジェクトが返ってくる
    };

    let logging = (callback) => {
      console.log(callback());
    };

    const car = {
      color: 'red',
      sayThis,
      // changeColor: function (color) {
      //   // logging(function () {
      //   logging(() => {
      //     return this.color;
      //   });
      //   this.color = color;
      // },
      // ↑メソッドの省略気泡
      changeColor(color) {
        // logging(function () {
        logging(() => {
          return this.color;
        });
        this.color = color;
      },
    };
    car.changeColor('yellow');

    console.log('----------');

    // apply, callを使ってthisを指定して関数を呼び出す
    sayThis = function (a, b) {
      console.log(this, a, b);
    };
    // sayThis.call({ hello: 'hello'}, 1, 2);
    // sayThis.apply({ hello: 'hello'}, [3, 4]);

    // bindを使ってthisや引数を固定した関数を作る方法
    sayThis = sayThis.bind({hello: 'hello'}, 1); // {hello: 'hello'} 1 undefined
    // sayThis(2); // {hello: 'hello'} 1 2

    // getterとsetter
    let pastaCalculator = {
      servingSize: 60,
      member: 4,
      // getter
      get total() { // getterにメソッド省略記法を書く
        return this.servingSize * this.member;
      },
      // setter
      set total(newValue) {
        this.member = newValue / this.servingSize;
      },
    }
    pastaCalculator.total = 600;
    console.log(pastaCalculator.total); // getterでメソッドをプロパティのように扱える
  }

  console.log('----------');

  // PropertyDescriptor
  const pastaCalculator2 = {
    servingSize: 120,
    member: 8,
  }
  Object.defineProperty(pastaCalculator2, 'total', {
    configurable: true,
    enumerable: true,
    get() {
      return this.servingSize * this.member;
    },
    set(newValue) {
      this.member = newValue / this.servingSize;
    }
  });
  console.log(Object.getOwnPropertyDescriptor(pastaCalculator2, 'servingSize'));
  console.log(pastaCalculator2);

  console.log('----------');

  // Object.preventExtensions()とObject.seal()とObject.freeze()
  const blog = {
    title: 'How to make a cake.',
    author: 'makoto',
  };
  // Object.preventExtensions(blog); // blogオブジェクトにこれ以上プロパティうを作成することが出来ない
  // Object.seal(blog); // blogオブジェクトにこれ以上プロパティうを作成することが出来ない＋configurableがfalseになる
  Object.freeze(blog); // blogオブジェクトにこれ以上プロパティうを作成することが出来ない＋configurableがfalseになる＋writableがfalseになる
  blog.hello = 'hello';

}
