// 22. Calculate the factorial of a number using recursion in JavaScript?
var n=5,i=1;

 function fun(i){
    if(i>1){
        n=n*(i-1)
       return fun(--i);
    }
    else{
        return n;
    }
 }
 console.log(fun(n));
