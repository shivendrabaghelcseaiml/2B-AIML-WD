class Product {
  constructor(productId, productName, price) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
  }

  getDiscountedPrice(discount) {
    return this.price - (this.price * discount) / 100;
  }

  displayInfo() {
    console.log(`Product ID: ${this.productId}`);
    console.log(`Name: ${this.productName}`);
    console.log(`Price: ₹${this.price}`);
  }

  static compareProducts(p1, p2) {
    if (p1.price > p2.price) {
      console.log(`${p1.productName} is priced higher at ₹${p1.price}`);
    } else if (p2.price > p1.price) {
      console.log(`${p2.productName} is priced higher at ₹${p2.price}`);
    } else {
      console.log(`Both products are priced equally at ₹${p1.price}`);
    }
  }
}

class Electronics extends Product {
  constructor(productId, productName, price, warranty) {
    super(productId, productName, price); // initialize inherited properties
    this.warranty = warranty;
  }

  displayInfo() {
    super.displayInfo(); // reuse base display logic
    console.log(`Warranty: ${this.warranty} years`);
  }
}

const p1 = new Product(101, "Wooden Chair", 2500);
const e1 = new Electronics(201, "Smartphone", 20000, 2);
const e2 = new Electronics(202, "Laptop", 55000, 3);

console.log(`Discounted price of ${p1.productName}: ₹${p1.getDiscountedPrice(10)}`);
console.log();

p1.displayInfo();
console.log();
e1.displayInfo();
console.log();
e2.displayInfo();
console.log();

Product.compareProducts(e1, e2);
Product.compareProducts(p1, e1);