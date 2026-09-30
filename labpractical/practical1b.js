const EventEmitter = require("events");

const button = new EventEmitter();

// Similar to addEventListener()
button.on("click", (name) => {
    console.log(`Button clicked by ${name}`);
});

button.on("mouseover", () => {
    console.log("Mouse is over the button");
});

// Trigger events
button.emit("mouseover");
button.emit("click", "Shivendra");