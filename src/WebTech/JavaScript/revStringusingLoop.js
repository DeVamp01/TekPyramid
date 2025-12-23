var s1='dad';
var s2='';
for (let i = 0; i < s1.length; i++) {
    s2=s1.charAt(i)+s2;
}
console.log(s2);

console.log(s1==s2?'palindrome':'not a pali')