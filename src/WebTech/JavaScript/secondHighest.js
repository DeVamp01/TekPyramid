var a=[12,5,9,2,5,24,21,22];
// a.sort(function(a, b){return a-b});
// console.log(a[a.length-2]);
var largest=0;
var slargest=0;
for (let i = 0; i < a.length; i++) {
        if (a[i]>largest) {
            slargest=largest;
            largest=a[i];
        }
        else if(a[i]>slargest && a[i]!=largest)
             slargest=a[i];
 }
 console.log(slargest);
 
        
    
    
