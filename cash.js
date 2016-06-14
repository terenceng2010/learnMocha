var coins = [1000,500,100,50,20,10,5,2,1,0.5,0.2,0.1];

var C = {};

C.getChange = function  (totalPayable, cashFromCustomer){
    var cashGiveBackToCustomer = cashFromCustomer - totalPayable;
    if(cashGiveBackToCustomer <= 0){
        return [];
    }
    
    var changedNotes = [];
    
    while(cashGiveBackToCustomer > coins[coins.length -1 ]){
            
            for(var currentCoinIndex =0 ; currentCoinIndex < coins.length ; currentCoinIndex++ ){
                if(coins[currentCoinIndex] <= cashGiveBackToCustomer){
                    changedNotes.push(coins[currentCoinIndex]);
                    cashGiveBackToCustomer -= coins[currentCoinIndex];
                    break;
                }
            }
    }
    
    return changedNotes;
};

module.exports = C;