// // numbers = [1, 2, 3]
// // for (x=0; x<numbers.length; x+=1){
// //     console.log(numbers[x])
// // }

// // people = ['Ayman', 'Kassandra', 'Khadija']

// // for (n=0; n<people.length; n+=1){
// //     console.log(n)
// //     console.log(people[n])
// // }

// // for (x=1; x<=10; x+=1){
// //     console.log("This is the loop number ".concat(x))
// // }

// // for (r=0; r<5; r+=1){
// //     console.log()
// // }

// // for (number=1; number<=5; number+=1){
// //     console.log(number);
// // }


// // Class Exercise

// // Q1: Write a program that checks numbers
// // from 1 to 5. If a number is even, the
// // program outputs it, otherwise it does
// // nothing

// for (i=1; i<6; i+=1){
//     if (i%2 === 0){
//         console.log(i)
//     }
// }



// CLASS EXERCISE

// Write a program that helps a customer pick cheap products
// from a certain shop. The shop has a list of items each 
// with its name, price and brand. The customer only has
// 50 naira to spend and is looking to buy up to 5 products.

shop = [
    {name:"Coke", price:100, brand:"Coca Cola"},
    {name:"Cake", price:15, brand:"Kanti Plus"},
    {name:"Pepsi", price:10, brand:"Pepsi Cola"},
    {name:"Sprite", price:140, brand:"Coca Cola"},
    {name:"Corn", price:10, brand:"Aymans Pantry"},
    {name:"Corn Flakes", price:100, brand:"Kellogs"},
    {name:"Butter", price:10, brand:"Blueband"},
]

money = 50;

cart_items = []
cart_prices = []

for (i=0; i<shop.length; i+=1){
    if (shop.at(i).price <= money){
        cart_items.push(shop.at(i).name)
        cart_prices.push(shop.at(i).price)
        money -= shop.at(i).price
    }
}

thanks = "Thank you for shopping with us\n"
items = ""
for (i=0; i<cart_items.length; i+=1){
    items+="\n"+cart_items.at(i)+" --- "+cart_prices.at(i);
}
items += "\nTOTAL:"+(50-money)
receipt = thanks+"Here are your items:\n"+items

console.log(receipt);
if (money > 0){
    console.log("Your change is "+money+" naira");
}