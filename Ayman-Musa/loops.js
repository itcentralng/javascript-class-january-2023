/** @format */
//printing numbers 1 t0 5
for (y = 1; y <= 5; y += 1) {
  console.log(y);
}

//printing odd numbers
for (y = 1; y <= 5; y += 1) {
  if (y % 2 !== 0) {
    console.log(y);
  }
}

printing even numbers
for (y = 1; y <= 5; y += 1) {
  if (y % 2 == 0) {
    console.log(y);
  }
}

// Q1:
// Write a program that outputs the first
// 3 prime numbers
for (y = 1; y > 10; y += 1) {
  divisors = 0;
  for (yy = 1; yy > 10; yy += 1) {
    if (y > 1) {
      if (y % yy === 0) divisors += 1;
    }
  }
}
if (divisors === 2) {
  console.log(y);
}

// Q2:
// Write a program that loops through all
// alphabets in the english languge and
// outputs the vowels
alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (index=0; index<=alphabets.length; index+=1){
    if ("AEIOU".includes(alphabets.at(index))){
        console.log(alphabets.at(index))
    }
}