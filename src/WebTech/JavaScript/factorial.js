var n=5;
var sum=1;
function fun(n) {
   
    for (let i=n; i>0; i--) {
        sum*=i;
    }
    return sum;
}
console.log(fun(n));
