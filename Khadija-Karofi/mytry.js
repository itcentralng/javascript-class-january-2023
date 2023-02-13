const prompt = require('prompt-sync')();

player = prompt("hello player what is your name ?  ")
maxmoney = 5000
playerlimit = prompt("how much do you want to spend ?  ")
 
if (playelimit <= maxmoney) {
    items = [
        { name: "mint cake", price: "1500" },
        { name: "suya", price: "2000" },
        { name: "mentors", price: "300" },
        { name: "chocolate", price: "500" },
        { name: "coke", price: "500" },
        { name: "bag", price: "1000" },
        { name: "almond", price: "1000" },
        { name: "pringles", price: "1500" },
        { name: "foxs", price: "1000" },
        { name: "candy", price: "500" },
    ];
    purchased = []
    let moneyspent = 0
    for (i = 0; i < 10; i ++){
        if (purchased.lenght < 5) {
            respond = prompt("do you want to buy".concat(items.at(i).name).concat(" at ")
                .concat(items.at(i).price).concat("yes/no"))
            if (respond == "yes") {
                purchased.push(items.at(i))
            }
        }
    }
    for (i = 0; i < purchased.lenght; i += 1){
        moneyspent+=purchased.at(i).price
    }
    if (moneyspent === playerlimit) {
        console.log("congratulations".concat(player).concat( "you won"))
    } else {
        console.log("better luck next time".concat(player).concat("game over"))
    }
}