function addition(a,b,clb){
    let sum=a+b;
    console.log("Addition result is: "+sum);
    clb(sum);
}
function subtraction(sumRes,c,clb1){
    let subRes=sumRes-c;
    console.log("Subtraction result is: "+subRes);
    clb1(subRes);
}
function multiply(subRes,d,clb2){
    let mul=subRes*d;
    clb2(mul);
}
function display(final){
    console.log("Final res is: "+final);
}

addition(5,10,(sumRes)=>{
    subtraction(sumRes,10,(subRes)=>{
        multiply(subRes,8,(mul)=>{
            display(mul);
        })
    })
})
