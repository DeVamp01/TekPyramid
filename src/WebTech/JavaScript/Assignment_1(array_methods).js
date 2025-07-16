//array methods
let arr =[0,1,2,3,4,5];
let arr1 =[6,7,8,9];

//at();
// console.log(arr.at(1));
// console.log(arr.at(9));   //UNDEFINED
// console.log(arr.at(-1));  //ACCESS FROM LAST

//concat()
// console.log(arr.concat(arr1));  //dosent modify orginal array
// console.log(arr.concat(arr1,arr1));  //adds twice
// console.log(arr.concat(arr,arr1)); 

//copyWithin()
// console.log(arr.copyWithin(2,3,4)); //index, start, end //copy elements from start and end(considers end)
//modifies original array

// fill()
// console.log(arr.fill(9,2,5));//fills given value(9) from start to before end , modifies org array

//filter
// console.log(arr.filter((a)=>a<3)); //returns elements based on conditions in function

//includes
// console.log(arr.includes(2)); //to check whether array contains the element

// shift() ---> removes first elem and returns it, mod org array
// console.log(arr.shift());
// console.log(arr);

// unshift
// console.log(arr.unshift(1,2,3)); //return length, adds elem at start of array, mod org array

//some ---->  returns true if even one condition satisfies true
// console.log(arr.some((a)=>a%2==0));

//join  -----> prints elem based on the string value (default is comma)
// console.log(arr.join()); //no mod org array

// //pop -----> removes last elem, mod org array, return removed elem
// console.log(arr.pop());
// console.log(arr);

//reverse  -----> mod org array
// console.log(arr.reverse());
// console.log(arr);

//slice() -----> dosent mod org array, gives desired elem from array, no last elem, like substring 
// console.log(arr.slice(2,-2));

//splice -----> removes elem from start to (no.of elements to be removed), return the removed elems
// console.log(arr.splice(1,3)); //mod org array
// console.log(arr);

//reduce -------> returns the operation done in reduce's callback function
// console.log(arr.reduce((acc,cur)=>acc+cur)); //dosent modify org array
// console.log(arr);             

//reduceRight()  curr value starts from right to left 
// console.log(arr.reduceRight((a,b)=>a+b-1));   //dosent modify org array

//find ---> returns the value of the first element that passes a test
// console.log(arr.find((a)=>a>3)); //dosent mod org array
 
//forEach ------> callBackfunction executes by taking each element (elem,index)
// arr.forEach((a)=>console.log(a));

//flat -----> Create a new array with the sub-array elements concatenated
// console.log(arr.flat(Infinity)); // numbers and infinity

// toSpliced() -----> returns new array with elem added or/and removed, no mod org array
// console.log(arr.toSpliced(2,0,4,5));
// console.log(arr);

//toSorted() ------> doesn't mod org array, returns sorted array as new array
// console.log(arr.toSorted());

// toReversed() ---> returns reversed new array, doesn't mod org array
// console.log(arr.toReversed());
// console.log(arr);

// (...)spread operators ----> splits array into individual elements,
// let minValue = Math.min(...arr);
// let maxValue = Math.max(...arr);
// console.log(minValue, maxValue);


//sort() ---> sorts the array, mod org array
// console.log(arr.sort());

//every ---->  returns true if all condition satisfies true, no mod org array
// console.log(arr.some((a)=>a%2==0));



