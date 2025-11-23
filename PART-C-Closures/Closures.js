// Q10. Simple Closure

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// Testing Q10
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3



// Q11. Medium Closure

function createWallet() {
  let balance = 0;

  function addMoney(amount) {
    balance += amount;
  }

  function checkBalance() {
    console.log(balance);
  }

  return {
    addMoney,
    checkBalance,
  };
}

// Testing Q11
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 
