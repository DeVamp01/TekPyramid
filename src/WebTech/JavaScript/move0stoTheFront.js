var arr=[2,0,1,3,0,5,2,0];

function myfun(ar){
    for (let i = 0; i <ar.length; i++) {
        if(ar[i]==0&&i==0) {
            continue;
        }
        else if(ar[i]==0){
            
            for (let j = i; j >0; j--) {
                ar[j]=ar[j-1]
                ar[j-1]=0;
            }
        } 
        else{
            console.log(3);
        }
    }
    return ar;
}
console.log(myfun(arr));