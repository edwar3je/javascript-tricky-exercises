function createAccount(pinNum, amount){
    let pin = pinNum;
    let balance = amount;
    class Account {
        checkBalance(pinNum){
            if(pinNum === pin){
                return balance
            }
            return 'Invalid PIN.'
        }
        deposit(pinNum, depositAmount){
            if(pinNum === pin){
                balance += depositAmount;
                return `Sucessfully deposited ${depositAmount}. Current balance: ${balance}.`
            }
            return 'Invalid PIN.'
        }
        withdraw(pinNum, withdrawAmount){
            if(pinNum === pin){
                if(withdrawAmount <= balance){
                    balance -= withdrawAmount;
                    return `Successfully withdrew ${withdrawAmount}. Current balance: ${balance}.`
                }
                return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            }
            return 'Invalid PIN.'
        }
        changePIN(oldPin, newPin){
            if(oldPin === pin){
                pin = newPin;
                return 'PIN successfully changed!'
            }
            return 'Invalid PIN.'
        }
    }
    return new Account();
}

module.exports = { createAccount };
