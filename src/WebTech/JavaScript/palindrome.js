function rev(str){
    let reversed = str.split("").reverse().join("");
    return str==reversed;
}
console.log(rev("danad"));
