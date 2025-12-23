function prime(a){
if(a<=1) return `${a} is not a prime`;

for(let i=2;i<=a/2;i++){
    if(a%i==0) return `${a} is not a prime`;
}
return `${a} is prime`;

}
console.log(prime(23));