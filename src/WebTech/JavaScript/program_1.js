// List = ["India", "USA", "Russia", "India", "China", "Australia", "India", "China", "Australia"]; output should be -> { India: 3, USA: 1, Russia: 1, China: 2, Australia: 2 }
var li = ["India", "USA", "Russia", "India", "China", "Australia", "India", "China", "Australia"]; 
var mp= new Map();
for (let i = 0; i < li.length; i++) {
    if(!mp.has(li[i])){
        mp.set(li[i],1);
        
    }
    else {
        val=mp.get(li[i]);
        mp.set(li[i],++val);
    }
    
}
var text='';
mp.forEach(function(key,values){text+=values+': '+key+'\n'})
console.log(text);
