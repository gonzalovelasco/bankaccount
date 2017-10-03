let Bank = require('./model/bank.js');

let bank = new Bank(1000);

bank.printaccount();

console.log("USUARIO OPERACION MONTO SALDO");

bank.dooperation("juan","extraccion",10);
bank.dooperation("pedro","extraccion",30);
bank.dooperation("juan","deposito",20);
bank.dooperation("pedro","extraccion",1000);

bank.printaccount();
