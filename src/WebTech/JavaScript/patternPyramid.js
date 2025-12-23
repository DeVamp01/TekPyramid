var n=6,m=0;
var s1='';
// for (let i = 0; i <n; i++) {
//     for (let j = 0; j <n; j++) {

//         if(i==m&&j>=m&&j<n-m){
//             s1='* '+s1
//         }
//         else s1='  '+s1;
//     }
//     m++;
//     s1='\n'+s1;
     
// }


// for (let i = 1; i <= n; i++) {
//     s1+='  '.repeat(n-i); //comment this line for acute angle
//     s1+='* '.repeat(2*i-1); //s1+='*'.repeat(i); rev acute
//     s1+='\n';
// }
// console.log(s1)

//pyramid
// for (let i = 1; i <=n; i++) {   
//     for (let j =i; j<n; j++) {
//         s1+=' ';
//     }
//     for (let k = 0; k<i; k++) {
//         s1+='* '
//     }
//  s1+='\n'
// }
// console.log(s1);

//reverse pyramid
// for (let i = 1; i <=n; i++) {   
//     for (let j =0; j<i; j++) {
//         s1+=' ';
//     }
//     for (let k = i; k<=n; k++) {
//         s1+='* '
//     }
//  s1+='\n'
// }
// console.log(s1);