let chai = require('chai'),
path = require('path');
let async = require('async');

chai.should();

let Bank = require(path.join(__dirname, '../model/', 'bank'));

describe('Bank', () => {

    describe('balances', () => {

        let bank;
        let asyncTasks = [];
        let data = [];

        function randomIntInc (low, high) {
            return Math.floor(Math.random() * (high - low + 1) + low);
        }

        before(() => {
            //50 randoms transactions from two users
            bank = new Bank(1000);
            data = new Array(50);
            for (var i = 0; i < data.length; i++) {
                let random_boolean = Math.random() >= 0.5;
                let random_boolean2 = Math.random() >= 0.5;
                data[i] = {amount : randomIntInc(0,1000), user:random_boolean2?"juan":"pedro", operation:random_boolean? "extraccion":"deposito"};
            }
            data.forEach((item) =>{
                asyncTasks.push((callback) =>{
                    bank.dooperation(item.user,item.operation,item.amount);
                    callback();
                });
            });


        });

        it('do 50 random operations', () => {
            bank.printaccount();            
            console.log('USUARIO OPERACION MONTO SALDO');            
            async.parallel(asyncTasks, function(){
                bank.printaccount();
            });

        });


    });

});
