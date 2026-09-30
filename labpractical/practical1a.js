const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// greet event
myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// exit event
myEmitter.on("exit", () => {
    console.log("Exit event triggered.");
});

// Trigger events
myEmitter.emit("greet", "Shivendra");
myEmitter.emit("exit");