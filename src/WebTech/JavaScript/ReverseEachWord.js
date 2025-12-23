// Given a string let a="how are you" output:"woh era uoy"
let a="how are you";
let rev=''
let out=''
for (let i=0;i<a.length;i++) {
    if(a[i]==' '){
        out+=rev+' ';
        rev=''
    }
    else rev=a[i]+rev;
}
out+=rev;

console.log(out);











// ar=[''],count=0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i]==' ') {
//         ar[++count]='';
//     } else {
//         ar[count]+=a[i];        
//     }
// }
// output='';
// for (let i = 0; i < ar.length; i++) {
//     output+= revWord(ar[i])+' ';
    
// }
// console.log(output);
// function revWord(word){
//     let oWord='';
//     for (let i = word.length-1; i >=0; i--) {
//         oWord+=word[i];
//     }
//     return oWord;
// }
