// // Say we have an object obj={one:”abc”, two:”bcd”,three:{threeOne:”cde”},four:[“def”,”fgh”]}, How can we convert it to obj={one-add:”abc”, two-add:”bcd”,three-add:{threeOne-add:”cde”},four-add:[“def”,”fgh”]}
// // let originalObj = {
// //  one: "abc",
// //   two: "bcd",
// //   three: {
// //     threeOne: "cde"
// //   },
// //   four: ["def", "fgh"]
// // };
// function fun(obj, suffix) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj;
//   }
//   if (Array.isArray(obj)) {
//     return obj.map(item => fun(item, suffix));
//   }
//   const newObj = {};
  

//   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
//       const newKey = `${key}${suffix}`;
//       newObj[newKey] = fun(obj[key], suffix);
//     }
//   }
  
//   return newObj;
// }

// const originalObj = {
  //  one: "abc",
  //   two: "bcd",
  //   three: {
    //     threeOne: "cde"
    //   },
    //   four: ["def", "fgh"]
    // };
// const transformedObj = fun(originalObj, "-add");
// console.log(transformedObj);

