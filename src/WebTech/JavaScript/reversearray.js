var a=[12,411,5213,124,1,2];
function fun(arr){
    let left=0;
    let right=arr.length-1;
while(left<right){
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    right--;
    left++;
}
    return arr;
}
console.log(fun(a));



/************************************** */
arr1=[1,2,3,4,5,6]
arr2=[];
for(let i=arr1.length-1;i>=0;i--)arr2[arr2.length]=arr1[i]
console.log(arr2)

