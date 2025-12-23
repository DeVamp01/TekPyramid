// 8. Write a Program to count the occurrences of a character in a string in JavaScript?
function count(s){
    const obj = {};
    for (const char of s) {
        // obj[char] = (obj[char]|| 0) + 1;
        if(obj[char])obj[char]+=1
        else obj[char]=1
    }
    return obj;
};

const s = "hello";
console.log(count(s));

// find the count
// we wil take some input
//we will crEATE FUNCTION
// we will pass the value as a parameter in the function
//we will take an empty object to store the freq of character
//for of conditon check
        // 1st condition -it will check h is present in object
                        //it is not available (since it is an empty object)
                        //execute else block
                        //and add value =1


                        //same for e

                        //next value
                        //

// while calling the function with value 