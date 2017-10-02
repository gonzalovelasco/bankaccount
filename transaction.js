class Transaction {    
    constructor (user,operation,amount,balance){
        this.user = user;
        this.operation = operation;     
        this.amount = amount;
        this.balance = balance;        
        this.datetime = new Date();                
    }

    tostring(){
        console.log(`${this.user} ${this.operation} ${this.amount} ${this.balance}`);        
    }
    tostringcomplete(){
        console.log(`${this.datetime} ${this.user} ${this.operation} ${this.amount} ${this.balance}`);        
    }
}

module.exports = Transaction;
