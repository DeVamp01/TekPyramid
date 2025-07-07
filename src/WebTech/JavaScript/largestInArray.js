console.log(largest([4,1,2,8,24,2]));
function largest(a){
let l= a[0];
for(let i=1; i<a.length;i++)
{
    if(a[i]>l)l=a[i];
}
return l;
}

