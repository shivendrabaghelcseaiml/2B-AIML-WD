function Student(name, lastName, city, pincode) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.pincode = pincode;
     this.display = function() {
        console.log("Name:", this.name);
        console.log("Last Name:", this.lastName);
        console.log("City:", this.city);
        console.log("Pincode:", this.pincode);
        console.log("----------------");
    };
}
let s1= new Student("shivendra", "Doe", "New York", "10001");
let s2 = new Student("saumya", "Smith", "Los Angeles", "90001");
let s3 = new Student("Alice", "Johnson", "Chicago", "60601");


s1.display();
s2.display();
s3.display();