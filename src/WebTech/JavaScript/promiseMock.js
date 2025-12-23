let promise1=new Promise((resolve,rj)=>{
    setTimeout(() => {
        console.log('1');
    }, 1000);
  resolve(1)
})
let promise2=new Promise((rv,rj)=>{
    setTimeout(() => {
        console.log('2');
    }, 2000);
  rv(2)
})
let promise3=new Promise((rv,rj)=>{
    setTimeout(() => {
        console.log('3');
    }, 3000);
  rv(3)
})
Promise.all([promise1,promise2,promise3])
.then((msg)=>console.log(msg))

Promise.allSettled([promise1,promise2,promise3])
.then((msg)=>console.log(msg))
