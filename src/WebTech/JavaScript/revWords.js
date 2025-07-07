let a='hello world from js'
a=a.split(' ');
var b='';
for (let i = 0; i < a.length; i++) {
    b=a[i]+'\t'+b;
    
}
console.log(b);
