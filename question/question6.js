class Person {
  static personCount = 0;

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    Person.personCount++;
  }

  displayDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }

  static displayTotalPersons() {
    console.log(`Total persons registered in the system: ${Person.personCount}`);
  }
}

class Doctor extends Person {
  constructor(id, name, age, specialization, consultationFee) {
    super(id, name, age); // initialize inherited properties
    this.specialization = specialization;
    this.consultationFee = consultationFee;
  }

  displayDetails() {
    super.displayDetails(); 
    console.log(`Role: Doctor`);
    console.log(`Specialization: ${this.specialization}`);
    console.log(`Consultation Fee: ₹${this.consultationFee}`);
  }
}

class Patient extends Person {
  constructor(id, name, age, disease, roomNo) {
    super(id, name, age); 
    this.disease = disease;
    this.roomNo = roomNo;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Role: Patient`);
    console.log(`Disease: ${this.disease}`);
    console.log(`Room No: ${this.roomNo}`);
  }
}

const doc1 = new Doctor(1, "Dr. shivendra", 42, "Cardiology", 800);
const doc2 = new Doctor(2, "Dr. singh", 38, "Orthopedics", 700);
const pat1 = new Patient(3, "baghel", 55, "Hypertension", 101);
const pat2 = new Patient(4, "ss baghel", 29, "Fracture", 204);

const people = [doc1, doc2, pat1, pat2];

people.forEach((p) => {
  p.displayDetails();
  console.log("--------------------------");
});

Person.displayTotalPersons();