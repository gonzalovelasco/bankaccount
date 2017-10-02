let chai = require('chai'),
  path = require('path');

chai.should();

let Account = require(path.join(__dirname, '..', 'account'));

describe('Account', () => {

  describe('balance', () => {

    let account;

    beforeEach(() => {
      account = new Account();
    });

    it('balance equal to 0', () => {
      account.balance.should.equal(0);
    });

    it('only can withdraw if has balance', () => {
      (() => {
        account.withdraw(10);
      }).should.throw(Error);
    });

    it('only can withdraw if has balance 2', () => {
      (() => {
        account.withdraw(0);
      }).should.to.not.throw(Error);
    });

  });

});
