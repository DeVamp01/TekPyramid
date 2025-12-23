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
