const product = {
  id: "PROD-8392",
  name: "Headphones",
  price: 120.00,
  quantity: 3,
  calculateTotal: function() {
    return this.price * this.quantity;
  },
  updateQuantity: function(newQuantity) {
    if (newQuantity >= 0) {
      this.quantity = newQuantity;
      console.log(`Success: Quantity updated to ${this.quantity}`);
    } else {
      console.log("Error: Quantity cannot be negative.");
    }
  },
  displayDetails: function() {
    console.log("--- Product Details                    ---" );
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Total Value: $${this.calculateTotal().toFixed(2)}`);
    console.log("-----------------------");
  }
};
product.displayDetails();
product.updateQuantity(5);
product.displayDetails();