var output='';
var count=1;
console.log(func('hello'));

function func(s1){
    s1=s1.split('');
    s1.sort();
    for (let i = 0; i < s1.length; i++) {
        let char=s1[i];
        for (let j = i+1; j<s1.length-1; j++) {
            if(s1[j]==char){
                count++;
                i++;
            }
        }  
        output+=char+':'+count+' '; 
        count=1;
    }
    return output;
}
