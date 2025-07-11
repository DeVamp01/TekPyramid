// Write a code in JavaScript const array = [ { name: "A", age: 9, cls : "5"}, { name: "B", age: 10, cls : "5"}, { name: "C", age: 9, cls : "5"}, { name: "D", age: 11, cls : "6"}, { name: "E", age: 8, cls : "6"} ] 
// resultObj = { 5: { 9: ["A", "C"], 10: ["B"] }, 6: { 8: ["E"], 11: ["D"] } }
const array = [
  { name: "A", age: 9, cls: "5" },
  { name: "B", age: 10, cls: "5" },
  { name: "C", age: 9, cls: "5" },
  { name: "D", age: 11, cls: "6" },
  { name: "E", age: 8, cls: "6" }
];

const resultObj=array.reduce((acc, {name,age,cls})=>{
if(!acc[cls])        acc[cls]={};
if(!acc[cls][age])   acc[cls][age]=[];
acc[cls][age].push(name);  
return acc;
 },{} );
console.log(resultObj);