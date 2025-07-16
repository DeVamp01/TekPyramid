// 13. Find the Union of Two Arrays in JavaScript?
let arr1=[1,4,6,3,8];
let arr2=[4,8,23,83,2];

let se1=new Set;
left=0;
right=0;
let tl=arr1.length+arr2.length;
for (let i = 0; i < tl; i++) {
if(left<arr1.length){
    se1.add(arr1[left++])
}
else{
    se1.add(arr2[right++])
}
    
}
console.log(se1);