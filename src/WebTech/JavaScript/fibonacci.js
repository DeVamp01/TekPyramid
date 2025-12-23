var n=10,a=0,b=1,i=2;

var output=a+' '+b;
while (n>i) {

    c=a+b;
    a=b;
    b=c;
    output=output+" "+c;
    i++;
}
console.log(output);
