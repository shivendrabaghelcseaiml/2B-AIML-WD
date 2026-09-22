class Vehicle {
  constructor(vehicleNo, driverName, distance) {
    this.vehicleNo = vehicleNo;
    this.driverName = driverName;
    this.distance = distance;
  }

  calculateFare() {
    console.log("Fare cannot be calculated for a generic vehicle.");
    return 0;
  }

  static displayPlatformName() {
    console.log("=== Welcome to QuickRide Cabs ===");
  }
}

// Derived class - Car
class Car extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance); 
  }

  calculateFare() {
    return this.distance * 15;
  }
}

class Bike extends Vehicle {
  constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance)
  }

  calculateFare() {
    return this.distance * 8;
  }
}

Vehicle.displayPlatformName();
console.log();

const car1 = new Car("DL01AB1234", "shivendra", 20);
const bike1 = new Bike("DL02CD5678", "singh", 12);
const car2 = new Car("DL03EF9012", "baghel", 35);

const vehicles = [car1, bike1, car2];

vehicles.forEach((v) => {
  console.log(`Vehicle No: ${v.vehicleNo}`);
  console.log(`Driver: ${v.driverName}`);
  console.log(`Distance: ${v.distance} km`);
  console.log(`Fare: ₹${v.calculateFare()}`);
  console.log("--------------------------");
});