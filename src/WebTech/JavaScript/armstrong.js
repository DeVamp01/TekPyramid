var n=371;
var m=n;
var len=Math.trunc(Math.log10(n)+1);
var sum=0,c=1;
function solve(n){
    for (let i = 0; i <len; i++) {
        var a=n%10;
            sum+=a**len;
            console.log(sum);  
            n=Math.trunc(n/10);
        }
        
    return sum==m;
}
console.log(solve(n));

