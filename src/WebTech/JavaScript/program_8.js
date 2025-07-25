// 2.  /* Write a code to bundle array elements into set of n elements Example 1: input Array: [1,2,3,4,5,6,7,8,9] n = 2 Output: [[1,2],[3,4],[5,6],[7,8],[9]] Example 2: input Array: [1,2,3,4,5,6,7,8,9,10] n = 3 Output: [[1,2,3],[4,5,6],[7,8,9],[10]] */ const bundleArr = (arr, n) => { } const input1 = [1,2,3,4,5,6,7,8,9]; console.log('Input 1: ', bundleArr(input1, 2)); const input2 = [1,2,3,4,5,6,7,8,9,10]; console.log('Input 2: ', bundleArr(input1, 3));
function fun1(ar,n){
    newar=[],count=0;

for (let k = 0; k < ar.length; k++) {
    for (let j = 0; j < Math.ceil(ar.length/n);j++) {
        newar[j]=[];
        for (let i = 0; i <n; i++,k++) {
            if(ar.length<=7) break;
            newar[j][i]=ar[k];
            if (count<ar.length-1) {
                count++;
            }
            else{
                break;
            }
        }
    }
    return newar;
}}
const ar=[1,2,3,4,5,6,7,8,9];
var n=2;
console.log(fun1(ar,n));