// missing number

arr=[7,5,10,3];
least=999;
// for(let i=0;i<arr.length;i++){
//     if(least>arr[i])least=arr[i]
// }
for(let i=0;i<arr.length-1;i++){
    for(let j=1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    if(least>arr[i])least=arr[i];
}

for (let i = 0; i < arr[arr.length]; i++) {
    if(arr[i]!=least){
        console.log(least);
        i--;
    }
    least++;
    
}