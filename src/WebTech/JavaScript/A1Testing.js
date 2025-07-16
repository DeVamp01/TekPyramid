
// // // Question 1
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(function() {
//     console.log(j);
//   }, 100);
// }

// Question 2
// let num1 = 10;
// let num2 = "10";
// console.log(num1 == num2);
// console.log(num1 !== num2);
// console.log(num1 != num2);

// // Question 3
// console.log(NaN == NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));

// // Question 4
// let obj = {
//     name: "John",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// }
// obj.greet();
// let greetFunc = obj.greet;
// greetFunc(); // what is the output here?

// Question 5
// var x = 20;
// function foo() {
//     console.log(this.x);
// }

// foo(); 
// let bar = foo.bind({x: 20});
// bar(); // what is the output here?


// //Q6
// const a = { value: 1 };
// const b = a;
// b.value = 2;
// console.log(a.value); // Output?


// // Q7
// console.log(undefined == null);


// // Q8

// const obj = {
//   valueOf: function() {
//     return 2;
//   },
//   toString: function() {
//     return "3";
//   }
// };
// console.log(obj + 1);



// // Q9
// console.log("3" + + 3 - "3" * 2 + "4" / 2);

// q10
// const value1 = "5";
// const value2 = 9;
// let sum = Number(value1) + value2;

// q11
// console.log(![]);                                                                                         // false
// console.log([] == ![]);                                                                                   // true 
// console.log([] === ![]);                                                                                  // false
// console.log(null == false);                                                                            // false
// console.log(null == true);                                                                             // false
// console.log(typeof new String("str") === typeof String("str"));

// console.log(JSON.stringify([1,2,null,3]))                                                                     // [1,2,null,3]
// console.log(JSON.stringify([1,2,undefined,3]))


// q12
// let obj1 ={name:”vineet”}
// let obj2 ={name:”vineet”}
// console.log(obj1===obj2);                                                                                            // false
// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));                                                            // true
// console.log(obj1==obj2);                                                                                            // false
// console.log(JSON.stringify(obj1)==JSON.stringify(obj2));                                                            // true


// q13
// console.log((true + false) > 2 + true);

// console.log(-"gopal3" + 409);

// Q14
// const myContainer = {

//   height: 4,
//   width: 2,
// }
// const num = 12;
// console.log(num + myContainer)

// q15
// console.log([] + null + 1 );
// console.log(!+[]+[]+![]);





