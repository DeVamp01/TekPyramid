var strs=['cba','daf','ghi'],count=0
var len=0;

    for(let i = 0; i < strs[0].length; i++){
        let str = ''
        for(let j = 0; j < strs.length; j++){
            str += strs[j][i]
        }
        let check = str.split('').sort().join('') == str
        if(!check){
            count += 1
        }
    }
console.log(count);
