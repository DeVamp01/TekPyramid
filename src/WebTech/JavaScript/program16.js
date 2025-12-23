// Given a string, find the longest palindrome contiguous substring, If there are more than one with max length, return any one. For example: the longest palindrome substring of "aabcdcb" is "bcdcb" , the longest palindrome substring of "bananas" is "anana"

var a='aabcdcb';
//     bcdcbaa
var org=a;
var b=a.split('').reverse().join('');
if(b==a)
console.log(a);
// console.log(b);
let max=''
let len=0;
let d=''
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
          if(a[i]==b[j]) d+=a[i++];
          else break;
    }
    if(d.length>max.length)max=d;
    d=''
}
console.log(max);
