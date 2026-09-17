class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    static bankInfo() {
        console.log("Bank Name: Vijay malaya Bank");
        console.log("General Information: Safe and secure banking services.");
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log(amount + " deposited successfully.");
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance = this.balance - amount;
            console.log(amount + " withdrawn successfully.");
        }
    }
    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
    }
}
let account1 = new BankAccount(101, "shivendra", 5000);
let account2 = new BankAccount(102, "singh", 3000);

BankAccount.bankInfo()
console.log("Account 1 Transactions:");
account1.deposit(2000);
account1.withdraw(1000);
account1.displayBalance();

console.log("Account 2 Transactions:");
account2.deposit(500);
account2.withdraw(4000);   
account2.withdraw(1000);
account2.displayBalance();