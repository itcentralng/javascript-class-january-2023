const prompt = require("prompt-sync")(); 
/*for (i = 0; i <= 5;i+=1)*/


console.log("welcome to the shopping game")
 username = prompt("Hey player what your name ?")
 spendAmount = prompt("How much do you wanna spend the maximum is 5000?")

// const PromptSync = require("prompt-sync")();


listofitems = [
    {
        name: "choocolate",
        price:"1000"
    },{
        name: "pringles",
        price: "2000"
    },{
        name: "suya",
        price:"1500"
    }, {
        name: 'youghurt',
        price:"1000"
    }, {
        name: "water",
        price:"500"
    }, {
        name: "mint cake",
        price:"700"
    }, {
        name: "chocodate",
        price:"2000"
    }
]

money = 5000

cart_item = []
cart_price = [] 

for (i = 0; i <= length; i += 1){
    if (listofitems.at(i).price >= money) {
        cart_item.push(listofitems.at(i).name)
        cart_price.push(listofitems.at(i).price)
        money -= listofitems.at(i).price
    }
}
thanks = "thanks for playing with us"
item = ""

for (i = 0; i < cart_item.lenght; i += 1) {
    item + "\n" + cart_item.at(i) + "-----"
        + cart_price.at(i);
}
item += "\ntotal scores :" + (5000 - money)
status = thanks + cart_item
console.log(status 
    + 5000 -money)

if (listofitems === cart_price.at(i)) {
    console.log("congratulations you win")
} else {
console.log("game over'\n'start again ")
}