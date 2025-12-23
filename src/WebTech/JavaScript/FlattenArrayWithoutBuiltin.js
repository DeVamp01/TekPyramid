// arr=[1,2,[3,4,[5],6],8]
// console.log(fun(arr));

// function fun(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result.push(...fun(arr[i])); // Spread operator to add elements individually
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
