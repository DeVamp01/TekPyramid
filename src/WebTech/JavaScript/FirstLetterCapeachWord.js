var str="hi how are you";
st1=str.split(" ");
str.substring()
var st2='';
for (let i=0;i<st1.length;i++) {
    st2+=st1[i][0].toUpperCase() + st1[i].substring(1)+" ";
}
console.log(st2);