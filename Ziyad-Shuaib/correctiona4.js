//pseudicode 
//Get the players name
//set a max spend limit of 5k
//receive player limit 
//make sure player limit is not more than set limit 
//create a list of items, to show to the user
//make sure our list contains name and price for each item
//loop through list of items and show the player 
//make sure player purchases not more than five items
//player wins after money is exhausted, compare player limit with player spent amount,
// if the comparison is true, we tell the player that they have won, otherwise its game over

player = prompt("whats your name? ")
maxSpend = 5000
playerLimit = prompt("how much do you want to spend? ")
//make sure that the player limit is not more than the maxSpend
if (playerLimit < maxSpend){
    //we play here 
    items = [
        {name: "coke", price: 250},
        {name: "pepsi", price: 500},
        {name: "sprite", price: 250},
        {name: "popcorn", price: 1000},
        {name: "biscuit", price: 250},
        {name: "cake", price: 500},
        {name: "lacesera", price: 200},
        {name: "popsicle", price: 1000},
        {name: "suya", price: 2000},
        {name: "iceCream", price: 750},
    ];

    purchased = []
    moneySpent = []
    for(i = 0; i < items.length; i++){
        Response = prompt("Do you want to buy " .concat(items.flat(i)).concat(" at ").concat().concat(" yes/no "))
    
     if(Response == "yes" && purchased.length < 5){
        purchased.push(items.at(i).name );
        moneySpent.push(items.at(i).pr)
        console.log(purchased)
     }else if(purchased.length >= 5){
        console.log(purchased)
        console.log('You cannot purchase more than five items')
     }else{
        console.log(purchased)
     }

}
    

}else{
    console.log("Sorry you cant spend more than" .concat(maxSpend))
}