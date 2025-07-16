// 12. Find the Intersection of Two Arrays in JavaScript?	
let arr1=[1,4,6,3,8];
let arr2=[4,8,23,83,2];
se1=new Set(arr1);
se2=new Set(arr2);

for (const i of se1) {
    for (const j of se2) {
        if (i==j) {
            console.log(i);
        }
    }    
}
