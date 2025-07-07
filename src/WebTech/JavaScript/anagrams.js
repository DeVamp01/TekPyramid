var a='string';
var b='sting'
function fun(s1,s2){
    var s1=s1.split('');
    s1.sort();
    var s2=s2.split('');
    s2.sort();
    if(s1.length!=s2.length)return 'Not an ANAGRAM'
    else {
        for (let i = 0; i < s1.length; i++) {
            if(s1[i]!=s2[i])return 'Not an Anagram' 
        }
        return a+'\t'+b +' are anagrams';
    }
return s1;
}
console.log(fun(a,b));