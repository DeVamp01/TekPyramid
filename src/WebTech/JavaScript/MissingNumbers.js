var a=[10,16,22,1,3,6,8,4,2,9];
a.sort((a,b) =>a-b);
c=1;
for (let i = 0; i<a.length; i++) {
     if(a[i]!=c){
        console.log(c);
        i--;
    } 
    c++;
}
