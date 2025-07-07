console.log(sample(20,1,40));
function sample(a,b,c){
if(a>b&&a>c)return a;
else if(b>a&&b>c) return b;
else return c;
}