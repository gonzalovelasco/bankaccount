let Account = require('./account.js');
let Transaction = require('./transaction.js');

/*
 * Bank
 *   Models a Bank.
 * Fields:
 *   account: Account
 *   transactions: Transaction
 * Methods:
 *   dooperation: ()
 *     Returns Account balance
 *   deposit: (user,operation,amount)
 *     Do operation in Account and add one transaction.
 *   printtransactions: (amount: number)
 *     Print transactions. 
 *   printaccount: ()
 *     Print Account
 */
class Bank {
    constructor (balance = 1000){
        this.account = new Account(balance);
        this.transactions = [];
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
