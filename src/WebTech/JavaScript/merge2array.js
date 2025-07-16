let arr1=[1,4,6,3,8];
let arr2=[4,8,23,83,2];
let arr3=[];
left=0;
right=0;
let tl=arr1.length+arr2.length;
for (let i = 0; i < tl; i++) {
if(left<arr1.length){
    arr3[i]=arr1[left++]
}
else{
    arr3[i]=arr2[right++]
}
    
}
console.log(arr3);