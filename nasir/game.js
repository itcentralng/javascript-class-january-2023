// Write a shopping game where a player will start by
// setting how much they want to spend in our shop with 
// maximum spend limit of 5000 naira.
// Players will then be presented with a list of items one
// by one for them to choose from.
// They must not buy more than 5 items.
// If a player spends all their money by the end of the game
// they win, otherwise they can choose to play again or
// its game over.

const prompt = require('prompt-sync')();

// Psuedocode
// get player name
// set a maximum spend limit of 5000
// recieve player limit
// make sure player limit is not more than our set limit
// create a list of items
// make sure our list contains name and price for each item
// loop through list of items and show player
// recieve player response
// store chosen item or price of chosen item
// make sure player purchases not more than 5 items
// Find a way to compare player limit with player spent amount
// if the comparison is true we tell the player that they have won
// otherwise its game over


player = prompt("Whats your name? ");
maxSpend = 5000;
playerLimit = prompt("How much do you want to spend? ")

if (playerLimit<=maxSpend){
    // we play here
    items = [
        {name:'Coke', price:200},
        {name:'Pepsi', price:230},
        {name:'Sprite', price:220},
        {name:'Fanta', price:100},
        {name:'Schewpes', price:150},
        {name:'Lacasera', price:200},
        {name:'Cake', price:1300},
        {name:'Suya', price:2000},
        {name:'Chocolate Cake', price:1500},
        {name:'Popsicle', price:1200},
    ];

    purchased = []
    let moneySpent = 0

    for (i=0; i<10; i+=1){
        if (purchased.length < 5){
            response = prompt("Do you want to buy ".concat(items.at(i).name).concat(" at ").concat(items.at(i).price).concat(" yes/no?"))            
            if (response=="yes"){
                purchased.push(items.at(i))
            }
    }
    }
    
    for (i=0; i<purchased.length; i+=1){
        moneySpent+= purchased.at(i).price;
    }

    if (moneySpent === playerLimit){
        console.log("Congratulations ".concat(player).concat(" you won!!!!"))
    }
    else{
        console.log("Sorry ".concat(player).concat(" better luck next time!!!"))

    }
    

    }

