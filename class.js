class Student {
    constructor(name, pincode) {
        this.name = name;
        this.pincode = pincode;
    }

    display() {
        console.log(this.name);
        console.log(this.pincode);
    }
}

let s1 = new Student("shivendra", 261001);
let s2 = new Student("shivendra", 261001);

s1.display();
s2.display();