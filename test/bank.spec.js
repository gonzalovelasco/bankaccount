let chai = require('chai'),
path = require('path');
let async = require('async');

chai.should();

let Bank = require(path.join(__dirname, '..', 'bank'));

describe('Bank', () => {

    describe('balances', () => {

        let bank;
        let asyncTasks = [];
        let data = [];

        function randomIntInc (low, high) {
            return Math.floor(Math.random() * (high - low + 1) + low);
        }

        before(() => {
            bank = new Bank();
            bank.addaccount("juan",1000);
            bank.addaccount("pedro",1000);
            
            data = new Array(50);
            for (var i = 0; i < data.length; i++) {
                let random_boolean = Math.random() >= 0.5;
                let random_boolean2 = Math.random() >= 0.5;                
                data[i] = {amount : randomIntInc(1,1000), user:random_boolean2?"juan":"pedro", operation:random_boolean? "extraccion":"deposito"};  
            }
            data.forEach((item) =>{
                asyncTasks.push((callback) =>{
                    bank.dooperation(item.user,item.operation,item.amount);
                    callback(); 
                });
            });

                    
        });

        it('make operations', () => {
            async.parallel(asyncTasks, function(){
                //console.log(data);
                bank.printtransactions();
            });
                
            //bank.dooperation("juan","deposito",1000);
            //bank.dooperation("juan","extraccion",1000);
            
        });
                
    
    });

});
