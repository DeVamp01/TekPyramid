// let arr=[0, 1, 2, 3] expected output should be {0:0, 1:1, 2:2, 3:3}
let arr=[0, 1, 2, 3];
var obj={}
for (let i = 0; i < arr.length; i++) {
    obj[i]=i
}
console.log(obj);