// /**
//  * 高階関数
//  *
//  * - 引数に関数を受け取る関数 → コールバック関数 (今回はこちらの話をする)
//  * - 関数を返す関数 → クロージャ (コールバック関数と比べるとクロージャを使う場面は少ないため、まずはコールバック関数を覚える)
//  */

// // 関数のおさらい
// // - 関数は変数に代入できる(=関数式)
// const add = (x, y) => {
//   return x + y;
// };

// // 関数が代入された変数は、「変数名()」の形式で関数を実行できる
// // 引数がある場合は「変数名(a, b)」のように、通常の関数実行と同じように関数を実行できる
// const addedValue = add(1, 2);
// console.log('addedValue : ', addedValue);

// // このとき「add(1, 2)」を実行した際、add関数の引数x,yにはそれぞれ、1と2が渡される(=代入される)
// // この動きは「let x = 1; let y = 2;」のように変数に値を代入するのと同じ感じだと言える

// // 引数が変数と同じように値を代入するのであれば、「関数式」と同じように
// // 引数に関数を渡せる(=代入)出来るのでは？ → 実際に出来る
// const test = ( func ) => {
//   func();
// };
// test(() => {
//   console.log('hello');
// })

// /**
//  * 上記のtest関数実行時の引数funcには、以下のように関数が代入されているということも出来る
//  *
//  * let func = () => {
//  *   console.log('hello');
//  * };
//  *
//  * なので、test関数内で、「func()」と書くことでfunc関数を実行できる。
//  * このように、
//  *
//  * 1. 関数A実行時に引数として関数Bを渡して
//  * 2. 関数Aの中で関数Bを実行するとき
//  * 3. 関数Bは関数Aの中で実行される関数、つまりコールバック関数ということが出来る
//  */

// // 引数ありのコールバック関数
// const test2 = ( func ) => {
//   func('abcxyz');
// };

// test2((message) => {
//   console.log(message);
// });

// /**
//  * 上記のtest関数実行時の引数funcには、以下のように関数が代入されているということも出来る
//  *
//  * let func = (message) => {
//  *   console.log(message);
//  * };
//  * func('abcxyz')
//  *
//  * なので、test関数内で、「func('from test2関数の中から')」と書くことでfunc関数を実行できて、
//  * func関数には引数が1つあるから、引数に「'from test2関数の中から'」とわたすことが出来る
//  *
//  * あとは、先ほどのコールバック関数の説明と同じ流れ
//  */

// 関数A : each
// 関数B : callback
// const each = (array, callback) => {
//   for(let i = 0; i < 3/*array.length*/; i++) {
//     callback(array[i], i, array);
//   }
// };
// const a = each([1, 2, 3], (currentValue, currentIndex, array) => {
//   console.log(`currentValue : ${currentValue}, currentIndex : ${currentIndex}, array : ${array}`);
// });

// let callback = (currentValue, currentIndex, array) => {
//   console.log(`currentValue : ${currentValue}, currentIndex : ${currentIndex}, array : ${array}`);
// };

/**
 * ↑
 * 上のeach関数を実行したときの、each関数の引数の各内容は次のようになっている
 *
 * let array = [1, 2, 3];
 * let callback = (currentValue, index, array) => {
 *   console.log(`currentValue : ${currentValue}, currentIndex : ${currentIndex}, array : ${array}`);
 * };
 *
 * // 問題1: each関数の中身を以下のように実装したら、callbackの中で実装してるconsole.logでどんな値が出力される?
 * const each = (array, callback) => {
 *   callback('hello', 123, true);
 * };
 *
 * // 問題2: each関数の中身を以下のように実装したら、callbackの中で実装してるconsole.logでどんな値が出力される?
 * const each = (array, callback) => {
 *   callback();
 * };
 *
 * // 問題3: each関数の中身を以下のように実装したら、callbackの中で実装してるconsole.logでどんな値が出力される?
 * const each = (array, callback) => {
 *   for(let i = 0; i < array.length; i++) {
 *     callback(array[i], i, array);
 *   }
 * };
 */



 const test = () => {
  let x = 0;

  return () => {
    x++;
    console.log('hello world; : ', x);
  };
 };


 const t1 = test();
 t1();
 t1();
 t1();
 t1();
 t1();