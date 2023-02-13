/*person = 
    {name:"khadijah",
     age:"22",
      gender:"female"}
console.log(person.gender)*/
// name = "zaiy ad"
// console.log(name.split(" "))
// true && true


//Data Types

/*
    STRINGS = "Ibrahim" "23" 
    BOOLEANS = true/false
    ARRAYS = ['Ibrahim', 24, true {

    }]
    OBJECTS = {
        name: 'Ibrahim',
        isMale: true,
        Age: 4
        hobbies: ['Swimming', 'Sleeping']
    }
    INTEGERS
    FLOATS
*/

//String methods

/*
.indexOf
.lastindex0f
.concat
.length
.split
*/

//Operators
/*
+, -, * , /, %, ||, &&, >, < , ==, ===

*/
//6 == '6'// return true
//6 === '6'// return false
// conditionals 

// lets create a conditional statement that checks between 2 numbers and prints out the smallest between the two

//num1 = 4
//num2 = 6

//if (num1 > num2){
    //console.log(num2)
//}else{
    //console.log(num1)
//}

// lets create a conditional statement that checks between 3 numbers and prints out the smallest between the 3
// num1= 7
// num2= 6
// num3= 4
// if (num1<num2 && num1<num3){
// console.log(num1)}
// else if (num2<num1 && num2<num3){
//     console.log(num2)
// }
// else{
//     console.log(num3)
// }



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



customerName = prompt('Hello, what is you name?')
wallet = prompt('how much do you want to spend?')
maxSpend = 10000
moneySpent = 0
if(wallet <= maxSpend){
    products = [
        {name: 'weed', price: 1500},
        {name: 'Cocaine', price: 2500},
        {name: 'AK47', price: 1200},
        {name: 'Codeine', price: 1500},
        {name: 'Tramadol', price: 800},
        {name: 'Refnol', price: 300},
        {name: 'Pistol', price: 700},
        {name: 'M16', price: 1500},
        {name: 'Grenade', price: 1000},
        {name: 'Launcher', price: 2000},
        {name: 'Mortar', price: 3000}
    ]
    bag = []
    for(i=0; i <= products.length; i++){
        if(bag.length < 5){
            askUser = prompt('Do you want to buy '.concat(products.at(i).name).concat(' at ').concat(products.at(i).price).concat('(yes/no)'))
            if(askUser == 'yes'){
                bag.push(products.at(i))
                moneySpent = moneySpent + products.at(i).price
                console.log(moneySpent)
                console.log(bag)
            }
        }else{
            // console.log('you have purchased more than 5 items')
            if(moneySpent == wallet){
                console.log('you have won')
            }else{
                console.log('you lost')
            }
        }

    }
}else{
    console.log('You are rich oo, you cannot play')
}