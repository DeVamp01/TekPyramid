var a=[1,2,4,1,2,7,4,8,5];
var b=[];
function fun(a){
    for (let i = 0; i < a.length; i++) {
        if(!b.includes(a[i])){
            b.push(a[i]);
        }
    }
    return b;
}
console.log(fun(a));
