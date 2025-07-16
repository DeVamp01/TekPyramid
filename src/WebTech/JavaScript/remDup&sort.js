var ar=[6,2,3,5,4,4,6];
var b=[];
function removeDup(ar){
    for (let i = 0; i < ar.length; i++) {
        if(!b.includes(ar[i])){
            b.push(ar[i]);
        }
    }
    return sortDup(b);
}
function sortDup(b){
    for (let i = 0; i <b.length-1; i++) {
        for (let j = 0; j < b.length-1; j++) {
            if(b[j]>b[j+1]){
                let temp=b[j];
                b[j]=b[j+1];
                b[j+1]=temp;
            }
            
        }
    }
    return b;
}
console.log(removeDup(ar));
