const fs = require("fs");

const fileName = "example.txt";

// 1. CREATE a file
fs.writeFileSync(fileName, "Hello, this is my first file!");

console.log("File created successfully.");

// 2. READ the file
const data = fs.readFileSync(fileName, "utf8");

console.log("File content:");
console.log(data);

// 3. UPDATE the file
fs.appendFileSync(fileName, "\nThis is updated content.");

console.log("File updated successfully.");

// Read updated content
console.log("Updated file content:");
console.log(fs.readFileSync(fileName, "utf8"));

// 4. DELETE the file
fs.unlinkSync(fileName);

console.log("File deleted successfully.");