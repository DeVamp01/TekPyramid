// const arr = ['hello', 'sky', 'cloud']; Without using inbuilt methods and if using loops, use only one loop and find the number of vowels in each element of the given array. Output array should be ['2', '0', '2']
const arr = ['hello', 'sky', 'cloud'];
var Newarr=[];
for (let i = 0; i < arr.length; i++) {
    var count=0;
    var j=0;
    function fun(ar){
        if(ar[j]=='a'||ar[j]=='e'||ar[j]=='i'||ar[j]=='o'||ar[j]=='u'){
            count++;
        }
        
        j++;
        if(ar.length>j) return fun(ar);
        return count;
        
        
    }
    
    Newarr[i]=fun(arr[i]);
    
    
    
}
console.log(Newarr);
