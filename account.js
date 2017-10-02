class Account {
 	constructor (){
		this.balance = 0;
	}
  balance (){
    return this.balance;
  }
	deposit (amount){
		this.balance += amount;
	}
	withdraw (amount){
    if(this.balance < amount){
      throw new Error("There aren't money.");
    }
		this.balance -= amount;
	}
}

module.exports = Account;
