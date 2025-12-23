// Rotate the elements in an array with respect to its index. Let arr=[1,2,3,4,5,6] index=2 Output=[3,4,5,6,1,2]
// var arr = [1, 2, 3, 4, 5, 6], index = 3;
// console.log(indRotation(arr, index));
// function indRotation(arr, n) {
//     first = [], c = 0;
//     for (let i = n; i < arr.length; i++) {
//         first[c++] = arr[i];
//     }
//     for (let i = 0; i < n; i++) {
//         first[c++] = arr[i];
//     }
//     return first
// }



let arr = [2, 3, 3, 4, 23, 43, 54]
idx = 2


for (i = 0; i < idx; i++) {
    arr[arr.length] = arr[i]
}
for (i = 0; i < arr.length - idx; i++) {
    arr[i] = arr[i + idx]
}
arr.length-=idx;
console.log(arr)