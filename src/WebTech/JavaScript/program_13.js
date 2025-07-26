// Rotate the array with 90 degrees const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] Output : [[7,4,1], [8,5,2], [9,6,3]]
const arr = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]];
var arr1=[[],[],[]];
for (let i = 0,n=arr.length-1; i < arr.length; i++,n--) {
    
    for (let j = 0,m=0; j < arr.length; j++,m++) {
        arr1[m][n]=arr[i][j];
    }
       
}
for (const e of arr1) {
    console.log(e);
}
