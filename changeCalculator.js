// the function will take 2 parameters 1.) The amount the user tendered and also take the price of the item selected
const changeCalculator = (cashReceived, itemPrice) => {
    // calculate the difference to know how much chnage to be returned to the user
    let difference = cashReceived - itemPrice;
    // console.log(difference);

    // we'll create a variable change and we'll later pass in the coin name and value of coins after calc
    let change = [];

    // when we pass in the coins we'll need s way to identify them so we'll need an array of the coin names
    const coinNames = ["Twenty five ", "Ten ", "Five ", "One "];
    // we'll then have the coin denominations array
    const coindDenominations = [25, 10, 5, 1];
    
    // we'll need a variable to store the number of coins to be given back per each iteration
    let amount;

    // iterate through the array 
    for(let i = 0; i < coindDenominations.length; i++){
        amount = Math.floor(difference/coindDenominations[i]);
        // if amount is greate than zero then that means the current coin will be part of the change  
        if(amount>0){
            // console.log("amount: " + amount)
            // add the current coin to the change array 
            change[coinNames[i]]=amount
            // we'll need to adjust the difference value. So that We'll take the remainder and use that as the new value we will still need to get change for and so on. 
            difference = difference%coindDenominations[i]
        }
    }

    // console.log("Change: " + change)
    return change;
}

// Call the function with the desired parameters
console.log(changeCalculator(100, 70))
console.log(changeCalculator(50, 3))