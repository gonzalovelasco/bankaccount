let chai = require('chai'),
  path = require('path');

chai.should();

let Account = require(path.join(__dirname, '..', 'account'));

describe('Account', () => {

  describe('balance', () => {

    let account;

    beforeEach(() => {
      account = new Account("Juan",1000);
    });

    it('equal to 1000', () => {
      account.balance.should.equal(1000);
    });

    it('can deposit money', () => {      
      account.deposit(5);  
      account.balance.should.equal(1005);      
    });

    it('only can withdraw if has money', () => {      
      (() => {
        account.withdraw(1001);
      }).should.throw(Error);
    });

    it('can withdraw', () => {      
      
      account.deposit(5);       
      (() => {
        account.withdraw(1001);        
      }).should.to.not.throw(Error);

      account.balance.should.equal(4);      
      
    });
    
  });

});
