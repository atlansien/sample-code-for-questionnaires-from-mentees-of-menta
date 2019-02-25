const myArray = {
  values: [],
  push: function() {
    /**
     * arguments: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/arguments
     *
     * - argumentsは配列に似ているが、配列ではなくArray Likeオブジェクト
     * - Array Likeオブジェクトは添字(インデックス番号)とlengthを持つオブジェクト
     * - push, forEachなどのArrayのメソッドを持たない
     * - arguments自体はあまり初心者のうちは覚えなくても良い。
     *   - 今回は実際のArray.prototype.pushと同じ動きを実現するために使っただけ
     *
     */
    for (let i = 0; i < arguments.length; i++) {
      this.values.push(arguments[i])
    }

    /**
     * - 上記内容はapplyを使って以下のように書くことも出来る。(初心者のうちはapplyを使うことは少ないため無視して良い)
     * - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
     */
    // Array.prototype.push.apply(this.values, arguments);
  },
  forEach: function(callback) {
    for(let i = 0; i < this.values.length; i++) {
      callback(this.values[i], i, this.values);
    }
  },
  // 正しく動かない?
  // (functino文とアロー関数でthisの取り扱い方が異なる)
  forEachWithArrow: (callback) => {
    for(let i = 0; i < this.values.length; i++) {
      callback(this.values[i], i, this.values);
    }
  },

  map: function(callback) {
    const newArray = [];
    this.forEach((value, index, array) => {
      const newValue = callback(value, index, array);
      newArray.push(newValue);
    });

    return newArray;
  },
  // 正しく動かない?
  // (functino文とアロー関数でthisの取り扱い方が異なる)
  mapWithArrow: (callback) => {
    const newArray = [];
    this.forEach((value, index, array) => {
      const newValue = callback(value, index, array);
      newArray.push(newValue);
    });

    return newArray;
  },

  filter: function(callback) {
    const filteredArray = [];
    this.forEach((value, index, array) => {
      if (callback(value, index, array)) {
        filteredArray.push(value);
      }
    });

    return filteredArray;
  },
  // 正しく動かない?
  // (functino文とアロー関数でthisの取り扱い方が異なる)
  filterWithArrow: (callback) => {
    const filteredArray = [];
    this.forEach((value, index, array) => {
      if (callback(value, index, array)) {
        filteredArray.push(value);
      }
    });

    return filteredArray;
  }
};

myArray.push(3, 4, 5);
(() => {
  console.log('forEach start-----------------------');
  myArray.forEach((v, i, a) => {
    console.log(v, i, a);
  });

  // エラーになる?
  // myArray.forEachWithArrow((v, i, a) => {
  //   console.log(v, i, a, ' : myArray.forEachを実行');
  // });

  console.log('forEach end-----------------------');
})();


(() => {
  console.log('map start-----------------------');

  const results = myArray.map((v, i, a) => {
    return v * 2;
  });
  console.log(results);

  // エラーになる?
  // const results2 = myArray.mapWithArrow((v, i, a) => {
  //   return v * 2;
  // });
  // console.log(results2);

  console.log('map end-----------------------');
})();

(() => {
  console.log('filter start-----------------------');

  const results = myArray.filter((v, i, a) => {
    return v % 2 === 0;
  });
  console.log(results);

  // エラーになる?
  // const results2 = myArray.filterWithArrow((v, i, a) => {
  //   return v % 2 === 0;
  // });
  // console.log(results2);

  console.log('filter end-----------------------');
})();