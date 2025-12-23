var str="hi how are you";
st1=str.split(" ");
var st2='';
for (let i=0;i<st1.length;i++) {
    st2+=st1[i][0].toUpperCase() + st1[i].substring(1)+" ";
}
console.log(st2);




// without inbuild


s1=' hello from narnia'
s2=[''];
for(let i=0;i<s1.length;i++){
    if(s2[0]=='' && s1[i]==' ') continue
    else if(s1[i]!=' '&& s2[s2.length-1]=='') s2[s2.length-1]+=s1[i].toUpperCase()
    else if(s1[i]!=' ')s2[s2.length-1]+=s1[i]
    else s2[s2.length]=''
}

console.log(s2)