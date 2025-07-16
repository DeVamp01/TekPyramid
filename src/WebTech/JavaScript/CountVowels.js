// 26. Count Vowels in a String in JavaScript?
let str='hi how are you';
let count=0;
for (const i of str) {
    if (i=='e'|i=='a'|i=='i'|i=='o'|i=='u') {
        count++;
    }
}
console.log("vowels: "+count);