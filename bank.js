let Account = require('./account.js');
let Transaction = require('./transaction.js');

class Bank {    
    constructor (){
        this.accounts = [];
        this.transactions = [];        
        console.log('USUARIO OPERACION MONTO SALDO');        
    }

    addaccount (user,balance){
        this.accounts[user] = new Account(user,balance);        
    }

    dooperation (user,operation,amount){        
        
        if(operation === 'extraccion'){
            
            try {            
                this.accounts[user].withdraw(amount);
            } catch(err) {
            }              
        }
        else if(operation === 'deposito'){
            this.accounts[user].deposit(amount);            
        }
        let transaction = new Transaction(user, operation, amount, this.accounts[user].balance);
        //transaction.tostring();
        this.transactions.push(transaction);        
        
    }
    printtransactions(){
        for (var i = 0; i < this.transactions.length; i++) {
            this.transactions[i].tostringcomplete();
        }
            
    }
}

module.exports = Bank;
