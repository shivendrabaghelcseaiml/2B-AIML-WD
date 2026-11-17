const EventEmitter = require('events');
const student = new EventEmitter();

student.on('studentRegistered', (name, rollNo) => {
    console.log("Student Registered Successfully!");
    console.log("Student Name:", name);
    console.log("Roll Number:", rollNo);
});
student.on('studentLogout', (name) => {
    console.log(name, "thanks for visiting");
});
student.emit('studentRegistered', 'Shivendra', 2500321530188);
student.emit('studentLogout', 'Shivendra');