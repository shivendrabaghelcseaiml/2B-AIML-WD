class Account{
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.balance;
    }
}

let account1 = new Account(101, "shivendra", 10000);

account1.deposit(5000);
console.log(account1.getBalance());

account1.withdraw(3000);
console.log(account1.getBalance());