a1="stagsgtam";

s1=[...a1];

console.log(fun(s1))
function fun(s1){
for(let i=0;i<s1.length-1;i++){
    
    for(let j=i+1;j<s1.length;j++){
        if(s1[i]==s1[j]){
            s1[j]=null
            nr=null
            break
        }
        else nr=s1[i]
    }
    if(nr) return nr 
    else if(i==s1.length-2 && s1[i+1]!=null) return s1[i+1]  //for last letter
    else if(i==s1.length-2) return "all are repeated" 
 }
}
    