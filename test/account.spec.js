let chai = require('chai'),
  path = require('path');

chai.should();

let Account = require(path.join(__dirname, '../model/', 'account'));

describe('Account', () => {

  describe('balance', () => {

    let account;

    beforeEach(() => {
      account = new Account("juan",1000);
    });

    it('balance equal to 1000', () => {
      account.balance.should.equal(1000);
    });

    it('only can withdraw if has balance', () => {
      (() => {
        account.withdraw(1200);
      }).should.throw(Error);
    });

    it('only can withdraw if has balance', () => {
      (() => {
        account.withdraw(1000);
      }).should.to.not.throw(Error);
    });

  });

});
