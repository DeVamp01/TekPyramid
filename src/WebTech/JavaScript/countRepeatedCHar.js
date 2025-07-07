function count(s){
    const obj = [];
    for (const char of s) {
        obj[char] = (obj[char]|| 0) + 1;
    }
    return obj;
};

const s = "hello";
console.log(count(s));