let Account = require('./account.js');
let Transaction = require('./transaction.js');

class Bank {
    constructor (balance = 1000){
        this.account = new Account(balance);
        this.transactions = [];
        console.log('USUARIO OPERACION MONTO SALDO');
    }

    dooperation (user,operation,amount){
        if(operation === 'extraccion'){

            try {
                this.account.withdraw(amount);
            } catch(err) {
            }
        }
        else if(operation === 'deposito'){
            this.account.deposit(amount);
        }
        let transaction = new Transaction(user, operation, amount, this.account.balance);
        transaction.tostring();
        this.transactions.push(transaction);

    }
    printtransactions(){
        for (var i = 0; i < this.transactions.length; i++) {
            this.transactions[i].tostringcomplete();
        }

    }
    printaccount(){
        this.account.tostring();

    }
}

module.exports = Bank;
