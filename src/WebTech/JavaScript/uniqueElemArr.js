// function findNonRepeatedValuesOptimized(arr) {
//     const result = [];
//     const checked = {}; // Track already processed elements

//     for (let i = 0; i < arr.length; i++) {
//         if (checked[arr[i]]) continue; // Skip if already checked
        
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) count++;
//         }

//         if (count === 1) {
//             result.push(arr[i]);
//         }

//         checked[arr[i]] = true; // Mark as processed
//     }

//     return result;
// }
const arr = [7, 8, 9, 7, 8, 10]; 
// console.log(findNonRepeatedValuesOptimized(arr)); 




for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]==arr[j]){
            arr[j]='';
            c=1;
        }   
    }
    if(c==1){
        arr[i]='';
        c=0;
    }   
}
console.log(arr.filter(a=>Number.isInteger(a)));