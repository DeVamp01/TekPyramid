// Find range between 10,20 and 4,14 and the last element as the checker for the number of pairs [10,20,4,14,4]
var arr=[10,20,4,14]
function fun1 (a,b) {
    if (a<b) {
        console.log(`diff between ${a} and ${b} is ${b-a}`);
    }
    else
        console.log(`diff between ${a} and ${b} is ${a-b}`);
}
for (let i = 0; i < arr.length; i++) {
    fun1(arr[i],arr[++i])
}
arr=[...arr,arr.length];
console.log(arr);