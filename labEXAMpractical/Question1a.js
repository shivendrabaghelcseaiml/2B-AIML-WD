const EventEmitter = require('events');
const readline = require('readline');

const attendance = new EventEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let presentCount = 0;
let absentCount = 0;

attendance.on('studentPresent', (name, roll, subject) => {
    presentCount++;

    console.log("\n--- Student Present ---");
    console.log("Name:", name);
    console.log("Roll Number:", roll);
    console.log("Subject:", subject);
    console.log("Attendance: Present");
});
attendance.on('studentAbsent', (name, roll) => {
    absentCount++;
    console.log("\n--- Student Absent ---");
    console.log("Name:", name);
    console.log("Roll Number:", roll);
    console.log("Notification: Student is absent!");
});
attendance.on('attendanceSummary', () => {
    console.log("\n--- Attendance Summary ---");
    console.log("Total Present:", presentCount);
    console.log("Total Absent:", absentCount);
    console.log("Total Students:", presentCount + absentCount);
});
rl.question("Enter student name: ", (name) => {
    rl.question("Enter roll number: ", (roll) => {
        rl.question("Enter subject: ", (subject) => {
            rl.question("Is student present? (yes/no): ", (status) => {

                if (status.toLowerCase() === "yes") {
                    attendance.emit(
                        'studentPresent',
                        name,
                        roll,
                        subject
                    );
                } else {
                    attendance.emit(
                        'studentAbsent',
                        name,
                        roll
                    );
                }
                attendance.emit('attendanceSummary');
                rl.close();
            });
        });
    });
});