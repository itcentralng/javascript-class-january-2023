const printName = ()=>{
    console.log('Hi my name is Ayman')
}

printName()

const countTo5 = ()=>{
    console.log(1, 2, 3, 4, 5);
}

countTo5();

const printAlpha = () => {
    console.log("ABCD");
}

printAlpha();


const printName2 = (name, age)=>{
    console.log('Hi my name is '+name+' and I am '+age+' years old')
}

printName2("Khadija", 10);
printName2("Zaiyad", 92);

// Q1:
// Write a function that
// takes a string and 
// Removes all characters
// Except those of the english
// Alphabets. e.g. 
// cleanString("34*H*_AB **$U")
// HABU

const cleanString = (chars)=>{
    let cleaned = "";
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (i=0; i<chars.length; i+=1){
        if (alphabets.includes((chars.at(i)).toLowerCase())){
            cleaned+=chars.at(i);
        }
    }
    console.log(cleaned);
}

cleanString("34*H*_AB **$U");
cleanString("hfweiur83rjsdfnsidfas8wyew");
cleanString("34*H*_AB **$U");


// Q2:
// Create a function
// That prints out
// your name

const doPrintName = ()=>{
    console.log("Ibrahim Shaba")
}

doPrintName();

// Q3:
// Write a function
// That takes your name
// As an argument
// And prints it out

const doPrintName2 = (name)=>{
    console.log("My name is "+name)
}

doPrintName2("Ziyad Shuaib");

// Q4:
// Write a function that takes
// your age as an argument
// And prints it out, if 
// age is not given it ensures
// A default value for age

const printAge = (age=10)=>{
    if (age < 18){
        console.log('you are too young')
    }else{
        console.log("I am "+age+" years old");
    }
}

printAge(18);

// Q5
// Write a function that
// Prints out all even numbers
// Between a certain range

const getEven = (n1, n2)=>{
    for (i=n1; i<n2; i+=1){
        if (i%2 === 0){
            console.log(i);
        }
    }
}

getEven(1, 10);
getEven(100, 110);

// Q6:
// Write a function that
// prints the odd numbers
// between a certain range

const getOdds = (n1, n2)=>{
    for (i=n1; i<n2; i+=1){
        if(i%2!==0){
            console.log(i);
        }
    }
}

getOdds(1, 10);

// Assigmemt
// Write a state and capital
// game where a user will be 
// prompted with a state
// for which they will provide
// a capital
// The game should be executed by
// calling a function
// And the game should run on
// An endless loop unless
// All the states have been called
// or the user wants to quit