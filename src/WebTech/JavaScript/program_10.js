// Find the 2nd and the 4th largest number in an Array without sorting
let arr=[3,7,13,11,9,8,4];
console.log(f1(arr,3));
function f1(arr,n){
    var largest=0,ind=0;
    for (let j = 0; j <n; j++) {
        largest=0,ind=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>largest){
            largest=arr[i]
            ind=i;
        }   
    }
        arr[ind]=0;
}
return `${n} largest element in an array is ${largest}`
}