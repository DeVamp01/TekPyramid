var a=[4,12,5,7,23,3];
var b=[],smallest=Number.MAX_VALUE;
for (let i = 0; i <a.length-1; i++) {
        for (let j = 0; j < a.length-1; j++) {
            if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
            
        }
    
}
console.log(a);
