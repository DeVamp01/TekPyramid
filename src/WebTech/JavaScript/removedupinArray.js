var ar=[1,2,4,6,1,47,31,32,2];
var a=[],c=0;
for (let i = 0; i < ar.length; i++) {
    if(fun(ar[i]))a[c++]=ar[i];
    
}
function fun(val){
    for (let i = 0; i < a.length; i++) {
        if (a[i]==val)return false;
    }
    return true;
}
console.log(a);