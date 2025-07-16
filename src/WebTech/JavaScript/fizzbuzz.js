  let n=15;
  for (let i = 1; i <=n; i++) {
console.log(func(i));
   }
 function func(n){      
    if(n%3==0&&n%5==0) return 'FizzBuzz';
    else if(n%5==0) return 'Buzz';
    else if(n%3==0)return 'fizz'
    else return n;
}
