// Q1:
// Write a program that outputs the first
// 3 prime numbers

// lets initiate a loop with the first 6 intergers
for (num1=1; num1<6; num1+=1){
    // lets set a variable to hold
    // all divisors of the number currently
    // in loop
    divisors = 0;
    // now lets loop through the first
    // 6 intergers again so we can try 
    // the division and see if its perfect
    for (num2=1; num2<6; num2+=1){
        // lets skip the first number though
        if (num1 > 1){
            // if it is a perfect division
            // then we add 1 to the divisors
            // counter
            if (num1%num2 === 0){
                divisors += 1
            }
        }
    }
    // finaly we check how many perfect
    // divisors the current number in loop
    // has. If it has only 2, that's itself
    // and 1 then we print it to the console.
    if (divisors === 2){
        console.log(num1)
    }
}

// Q2:
// Write a program that loops through all
<<<<<<< HEAD
// alphabets in the english languge and
// outputs the vowels
=======
// alphabets in the english languge and 
// outputs the vowels

alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (index=0; index<=alphabets.length; index+=1){
    if ("AEIOU".includes(alphabets.at(index))){
        console.log(alphabets.at(index))
    }
}
>>>>>>> 47387e38c3c79b148f4f178fa0e37c1a2fba73b0
