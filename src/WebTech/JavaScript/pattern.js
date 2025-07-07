const n=5;
var output='';
for(var i=1;i<=n;i++){
    for(var j=0;j<i;j++){
        var output= '* '+ output;
    }
    console.log(output);
    output='';
}