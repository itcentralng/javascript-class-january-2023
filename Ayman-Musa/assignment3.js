/ Q1:
// Declare a variable called "str" and assign it a string
//  value. Use the toLowerCase() method to convert "str"
//  to lowercase, then use the split() method to create
//  an array of characters from "str" and use the reverse()
//  method to reverse the order of the characters in
// the array. Finally, join the characters in the array
// back together into a string and store the result in
// a new variable called "reverseStr". Compare "str"
// to "reverseStr" using conditional statement and output
// "The string is a palindrome" if they are the same or
// "The string is not a palindrome" if they are different.

str = "ayman";
str = str.toLowerCase();
gist = str.split("");
gist.reverse();
reverseStr = gist.join("");
if (str === reverseStr) {
  console.log("The string is a palindrome");
} else {
  console.log("The string is not a palindrome");
}

// Q2:
// Declare an array called "numbers" and initialize
//  it with a list of integers. Use the array index
// to access each element and multiply it by 2.
// Output the modified array.
numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[0] * 2;
nymbers[1] = numbers[1] * 2;
numbers[2] = numbers[2] * 2;
numbers[3] = numbers[3] * 2;
numbers[4] = numbers[4] * 2;
console.log(numbers);

// Q3:
// Declare an object called "person" with properties "name",
//  "age" and "gender". Use a conditional statement to
// check if the age property is greater than 30, then
// output the key-value pairs of the object using the
// object properties.
person = { name: "ayman", age: 25, gender: "female" };
if (person.age > 30) {
  console.log(person);
}
