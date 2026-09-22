class Employee {
  constructor(id, name, basicSalary) {
    this.id = id;
    this.name = name;
    this.basicSalary = basicSalary;
  }

  calculateSalary() {
    return this.basicSalary;
  }
}

class Manager extends Employee {
  constructor(id, name, basicSalary, incentive) {
    super(id, name, basicSalary); // initialize inherited properties
    this.incentive = incentive;
  }

    calculateSalary() {
    return this.basicSalary + this.incentive;
  }
}
const emp = new Employee(185, "shivendra", 30000);
const mgr = new Manager(2789, "singh", 50000, 15000);

console.log(`Employee: ${emp.name} (ID: ${emp.id})`);
console.log(`Salary: ₹${emp.calculateSalary()}`);
console.log();
console.log(`Manager: ${mgr.name} (ID: ${mgr.id})`);
console.log(`Salary: ₹${mgr.calculateSalary()}`);