class Account {
 	constructor (user ,balance =  0){
		this.balance = Number(balance);
		this.user = user;		
	}

  balance (){
    return this.balance;
	}

	user (){
    return this.user;
	}

	deposit (amount){
		this.balance += Number(amount);
	}

	withdraw (amount){
    if(this.balance < Number(amount)){
      throw new Error("There aren't money.");
    }
		this.balance -= Number(amount);
	}
}

module.exports = Account;
