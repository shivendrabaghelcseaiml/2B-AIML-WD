let student = {
    name: "Shivendra Singh",
    lastName: "Baghel",
    city:"kanpur nagar",
    pincode:209401,
    salary:function(){
        document.write("Salary is 50000");
    },
    subjects:["Maths","Java","C++"]
};
console.log(student.name);
console.log(student.lastName);
console.log(student.city);
console.log(student.pincode);
console.log(student.subjects);
student.salary();