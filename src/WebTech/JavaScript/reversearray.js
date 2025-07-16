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

