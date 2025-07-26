// Write a function which will give following output const arr = [123, 456, 789, 123, 456, 123] Expected output - fn(1) = 123 
// //123 is repeated 3 times fn(2) = 123, 456 //123 is repeated 3 times, 456 is repeated 2 times fn(3) = 123, 456, 789 //123 is repeated 3 times, 456 is repeated 2 times, 789 is repeated 1 time

const arr = [123, 456, 789, 123, 456, 123];
se=new Set(arr);
console.log(fun(arr,se));
function fun(arr1,se1,a,b,c){
    output='';
    for (let i of se1) {
         let count=0;
       for (let j = 0; j < arr1.length; j++) {
        
            if(i==arr1[j])count++;
       }
        output+=`${i} is repeated ${count} times, `
    }
    return output;
}
