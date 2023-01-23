// Create an array holding your shopping list
// Your list should contain at least 2 items
// Use conditionals to check if "Coke" is in your list
// If it is not, add it and then print the list
// Note that your array can not have "Coke" when initialized

drinks = ['Fanta', 'Sprite', 'Coke']
if(!drinks.includes('Coke')){
    drinks.push('Coke')
    console.log(drinks)
}else{
    console.log(drinks)
}