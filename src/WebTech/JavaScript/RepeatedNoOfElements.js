arr=[1,2,4,6,7,12,4,1,2,6];
var arset= new Set;
for (const i of arr) {
    arset.add(i);
}
console.log("Node.of Repeated elements in array is : "+ (arr.length-arset.size));
