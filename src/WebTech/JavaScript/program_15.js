// a= [{price: 100},{price: 600}] get the summation of price -> (ans -700)
let a= [{price: 100},{price: 600}],element=0;
for (const k of a) for (const i in k) element+=k[i];
console.log(element);