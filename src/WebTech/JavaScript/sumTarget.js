// 2.Write a program to solve sum of two problem (Input: [2,7,12,1,2], target:9; Output:[0,1]; Input:[3,4,5,2], target:6; Output:[1,3]) 

var a=[3,2,7,12,5,2];
var target=6;
function fun(ar,tg){
    for (let i = 0; i < ar.length-1; i++) {
        for (let j = i+1; j <=ar.length; j++) {
            if(ar[i]+ar[j]==tg)return [i,j];   
        }       
    }
    return "sum of two element for a desired target dosent found";
}
console.log(fun(a,target));
