class BankAccount{
    constructor(name,account){
     this.name = name,
     this.account = account
    }
  depositingAccountBalance(incomingMoney){
       
       if(incomingMoney < 0){
        console.log(`Invalid Amount :${incomingMoney}`)
       }else{
        console.log(`deposited Money is,Rs.${incomingMoney}`)
        const depositMoney = incomingMoney;
        const savingMoney = this.account;
        const totalMoney = depositMoney+savingMoney;
        this.account = totalMoney;
        console.log(`NewBalance is Rs.${totalMoney}`)
       }

  }
  withdrawingAccountBalance(widthdrawMoney){
     if(widthdrawMoney < 0){
       console.log(`Invalid withdrawl Ammount.Please Enter a valid amount`);
     }
     if(widthdrawMoney > this.account){
        //this.account = 0;
        console.log('Insuficient money for widthdraw')
    }
    
  }
  checkingAccountBalance(){
   console.log(`Account Balance for Mithun S. is RS.${this.account}`)
  }
}
const myAccount = new BankAccount('Mithun S',1000);
myAccount.checkingAccountBalance();
myAccount.depositingAccountBalance(500);
myAccount.depositingAccountBalance(-50);
myAccount.withdrawingAccountBalance(1600);
//myAccount.withdrawingAccountBalance(100);
//myAccount.withdrawingAccountBalance(-500);
myAccount.checkingAccountBalance();


