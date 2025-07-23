// Write a program to solve two sum problem (Input: [2,7,12,1,2], target:9; Output:[0,1]; Input:[3,4,5,2], target:6; Output:[1,3])

let array=[3,4,5,2];
let target=6;
function fun(array,target){
for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i]+array[j]==target){
            return [i,j];    
        }
        
    }
    
 }
}
console.log(fun(array,target));
