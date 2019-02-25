const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000)
});
promise
  .then(value => {
    console.log(value, '@@@@@@@@1');

    return value * 2;
  })
  .then(value => {
    console.log(value, '@@@@@@@@2');
    return 1;
  })
  .then(value => {
    console.log(value, '@@@@@@@@3');
  })
  .catch(error => {
    console.log(error, '@@@@@error');
  });


// getUsers((users) => {
//   const userIdList = users.map(user => user.id);
//   getUsersDetails(userIdList, (userDetaill) => {
//     const companyIds = userDetails.map(detail => detail.c_id);
//     getCompanies(companyIds, (companies) => {

//     });
//   }, 0)
// }, 0)


// // let i = 0;
// // function t() {
// //   i++;
// //   console.log(i);
// //   t();
// // }

// // t();


// // setTimeout(() => {
// //   console.log('1秒まった');
// // }, 0);

// // console.log('すぐ');

// // const each = (array, callback) => {
// //   for(let i = 0; i < array.length; i++) {
// //     callback(array[i], i, array);
// //   }
// // };


// // const func3 = (currentValue, currentIndex, array) => {
// //   console.log(`${currentValue}, ${currentIndex}, ${array}`);
// // };

// // each([1, 2, 3], func3);




// // // let callback = (currentValue, currentIndex, array) => {
// // //   console.log(`currentValue : ${currentValue}, currentIndex : ${currentIndex}, array : ${array}`);
// // // };



// // // const factorial = (number) => {
// // //   if (number <= 1) {
// // //     return 1;
// // //   }

// // //   return number * factorial(number - 1);
// // // };

// // // console.log('factorial(4) : ', factorial(4));
// // // // 1回目 : return 4 * factorial(4 - 1); 2回目の結果より factorial(4 - 1) === 3 * 2 * 1、　つまり return 4 * 3 * 2 * 1 となる
// // // // 2回目 : return 3 * factorial(3 - 1); 3回目の結果より factorial(3 - 1) === 2 * 1、 つまり 「return 3 * 2 * 1;」 となる
// // // // 3回目 : return 2 * factorial(2 - 1); 4回目の結果より factorial(2 - 1) === 1 、つまり 「return 2 * 1;」となる
// // // // 4回目 : return 1