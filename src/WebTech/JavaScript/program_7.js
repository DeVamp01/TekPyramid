// 1.Understand the requirement and write a code to execute the output. For all students who scored less than 60, add 20 grace marks to their scores. After applying the grace marks, calculate the total sum of marks for all students whose final score is greater than 60. const students = [ { name: "Piyush", rollNumber: 31, marks: 80 }, { name: "Jenny", rollNumber: 15, marks: 69 }, { name: "Kaushal", rollNumber: 16, marks: 35 }, { name: "Dilpreet", rollNumber: 7, marks: 55 }, ];

const students = [  { name: "Piyush", rollNumber: 31, marks: 80 },
                    { name: "Jenny", rollNumber: 15, marks: 69 },
                    { name: "Kaushal", rollNumber: 16, marks: 35 },
                    { name: "Dilpreet", rollNumber: 7, marks: 55 },
    ];
    let sum=0;
for (const i of students) {
        if(i.marks<60) i.marks+=20;
        if(i.marks>60) sum+=i.marks;
}
console.log(sum);

