// 17. Find the Longest Word in a String in JavaScript?

var str="welcome to Javascript";
var s1=str.split(" ");
largest=0;
l1='';
for (const i of s1) {
    if(i.length>largest)
        largest=i.length;
    l1=i;
}
console.log(l1);
// console.log(s1);
// let Length=0
// let index=0
// for (let i = 0; i < s1.length; i++) {
//     if(Length<s1[i].length){
//         Length=s1[i].length
//         index=i
//     }
    
// }