var arr=[1,2,3,4,5,6];
// var soe=arr.reduce((acc,a)=>( acc+a),0);
// // var soe=arr.reduce((acc,ele)=>(acc+ele),0)
// console.log(soe);

sum=0;
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    
}
console.log(sum);