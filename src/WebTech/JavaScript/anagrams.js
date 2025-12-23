var aa='string';
var bb='string';
var aa=[...aa];
var bb=[...bb];
// function fun(s1,s2){
//     var s1=s1.split('');
//     s1.sort();
//     var s2=s2.split('');
//     s2.sort();  //use s2.join() to make it string and compare without loop
//     if(s1.length!=s2.length)return 'Not an ANAGRAM'
//     else {
//         for (let i = 0; i < s1.length; i++) {
//             if(s1[i]!=s2[i])return 'Not an Anagram' 
//         }
//         return a+'\t'+b +' are anagrams';
//     }
// return s1;
// }
// console.log(fun(a,b));
function fun(s1,s2){
    if(s1.length!=s2.length)return 'Not an Anagram'

    for (let i = 0; i <s1.length; i++) {
        for (let j = 0; j <s2.length; j++) {
            if(s1[i]==s2[j]){ 
                s2[j]=''
                console.log(s2)
                break;
            }
            else if(s2[j]!='') return 'not an anagram'
        }
    }
    return 'Anagram'
}
console.log(fun(aa,bb));

