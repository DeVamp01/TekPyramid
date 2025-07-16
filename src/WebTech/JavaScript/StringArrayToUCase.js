// 19. Convert an Array of Strings to Uppercase in JavaScript?
var str=['hi','how','are','you'];
var st2='';
 for (const i of str) {
    st2+=i.toUpperCase()+' ';
 }
 console.log(st2);