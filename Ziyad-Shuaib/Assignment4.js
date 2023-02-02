

const MAX_SPEND = 5000;
const MAX_ITEMS = 5;

// Function to prompt user for amount to spend
function getBudget() {
  let budget = parseInt(prompt("How much do you want to spend in our shop today? (Maximum spend limit is 5000 naira)"));
  while (budget > MAX_SPEND || budget <= 0) {
    budget = (prompt("Invalid budget. Please enter a valid amount to spend (Maximum spend limit is 5000 naira)"));
  }
  return budget;
}

// List of items available for purchase
const items = [
  { name: "item1", price: 1000 },
  { name: "item2", price: 1500 },
  { name: "item3", price: 2000 },
  { name: "item4", price: 2500 },
  { name: "item5", price: 3000 },
  { name: "item6", price: 3500 },
  { name: "item7", price: 4000 }
];

// Function to display list of items and allow user to select items to purchase
function shop(budget, itemsBought = []) {
  if (itemsBought.length >= MAX_ITEMS || budget <= 0) {
    console.log("You have reached the maximum number of items allowed to purchase or you have run out of money.");
    console.log("Your final purchase list: " + itemsBought.map(item => item.name).join(", "));
    console.log("Your remaining budget: " + budget);
    if (budget <= 0) {
      console.log("Congratulations! You have spent all your money.");
    } else {
      console.log("Sorry, you were not able to spend all your money. Better luck next time.");
    }
    return;
  }

  console.log("Here is a list of items available for purchase:");
  for (let i = 0; i < items.length; i++) {
    console.log(i + 1 + ". " + items[i].name + ": " + items[i].price + " naira");
  }

  let itemIndex = parseInt(prompt("Enter the number of the item you would like to purchase")) - 1;
  while (itemIndex < 0 || itemIndex >= items.length) {
    itemIndex = parseInt(prompt("Invalid item number. Please enter a valid item number")) - 1;
  }
  let item = items[itemIndex];

  if (budget >= item.price) {
    budget -= item.price;
    itemsBought.push(item);
    console.log("You have purchased " + item.name + " for " + item.price + " naira");
    console.log("Your remaining budget: " + budget);
    shop(budget, itemsBought);
  } else {
    console.log("You do not have enough money to purchase " + item.name);
    shop(budget, itemsBought);
  }
}

// Start the game
let budget = getBudget();
console.log("Welcome to the shopping game! You have " + budget + " naira to spend.");
shop(budget);
