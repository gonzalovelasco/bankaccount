class Account {
 	constructor (user,balance){
		this.balance = balance;
    this.user = user;
	}
  balance (){
    return this.balance;
  }
	deposit (amount){
		this.balance += Number(amount);
	}
	withdraw (amount){
    let amo  = Number(amount);
    if(this.balance < amo){
      throw new Error("There aren't money.");
    }
		this.balance -= amo;
	}
  tostring (){
    console.log(`${this.user} Saldo: ${this.balance}`);
  }
}

module.exports = Account;
