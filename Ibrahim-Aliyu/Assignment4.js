const prompt = require('prompt-sync')();

const enterAmount = prompt('Please Enter Amount:')
const maxAmount = 5000
console.log(enterAmount)

const list = [{
    'name': 'coke',
    'price': 500,
},
{
    'name': 'bread',
    'price': 1000,
},
{
    'name': 'Holandia',
    'price': 900,
},
{
    'name': 'Oreos',
    'price': 2500,
},

]

if (enterAmount > maxAmount){
    enterAmount = prompt('The maximum you can spend is 5000, please enter at-most' +maxAmount) 
}else if (enterAmount < maxAmount){
    console.log('Your Amount is ' + enterAmount)
    for (let i = 0; i < list.length; i++){
    console.log('we have, :' + list[i].name + ":" + list[i].price)
    }
}   

