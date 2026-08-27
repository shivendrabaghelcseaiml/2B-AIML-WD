let student = {
    name: "Shivendra singh",
    lastName: "baghel",
    city:"ghaziabad",
    pincode:209401,
    salary:function(){
        console.log("Salary is 50000");
    },
    subjects:["Maths","Java","C++"]
};
console.log(student.name);
console.log(student.lastName);
console.log(student.city);
console.log(student.pincode);
console.log(student.subjects);
student.salary();