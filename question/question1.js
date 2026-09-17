class Student {
    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }
    displayResult() {
        const status = this.marks >= 30 ? "PASS" : "FAIL";
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Result: ${status}`);
        console.log("-----------------------------");
    }
}
const s1 = new Student(101, "shivendra", 78);
const s2 = new Student(102, "singh", 29);
const s3 = new Student(103, "baghel", 55);
s1.displayResult();
s2.displayResult();
s3.displayResult();
console.log("Total Students Created: ",Student.totalStudents);