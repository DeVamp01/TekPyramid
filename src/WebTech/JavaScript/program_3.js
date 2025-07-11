// 2.  Write a code to bundle array elements into set of n elements Example 1: input Array: [1,2,3,4,5,6,7,8,9] n = 2 Output: [[1,2],[3,4],[5,6],[7,8],[9]] Example 2: input Array: [1,2,3,4,5,6,7,8,9,10] n = 3 Output: [[1,2,3],[4,5,6],[7,8,9],[10]]

var ar=[1,2,3,4,5,6,7,8,9];
var newar=[];
var n=2;
for (let l = 0; l < Math.ceil(ar.length/n); l++) {
    newar[l]=[];
}
for (let k = 0; k < ar.length; k++) {
    
    for (let j = 0; j < Math.ceil(ar.length/n);j++) {
        
        for (let i = 0; i <n; i++,k++) {
            if(ar.length<=7

                
            ) break;
            newar[j][i]=ar[k];
            
        }
    }
    
}
console.log(newar);