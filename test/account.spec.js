let chai = require('chai'),
  path = require('path');

chai.should();

let Account = require(path.join(__dirname, '../model/', 'account'));

describe('Account', () => {

  describe('balance', () => {

    let account;

    beforeEach(() => {
      account = new Account(1000);
    });

    it('balance equal to 1000', () => {
      account.balance.should.equal(1000);
    });

    it('can only withdraw if there is balance', () => {
      (() => {
        account.withdraw(1200);
      }).should.throw(Error);
    });

    it('can withdraw', () => {
      (() => {
        account.withdraw(1000);
      }).should.to.not.throw(Error);
    });

    it('can deposit', () => {
        account.deposit(10);
        account.balance.should.equal(1010);        
    });

  });

});
