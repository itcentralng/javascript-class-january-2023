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

const prompt = require('prompt-sync')();

const play = ()=>{

    states = [
        {name:"Abi", capital:"Umuahia"},
        {name:"Adamana", capital:"Yola"},
        {name:"Akwa Ibom", capital:"Uyo"},
        {name:"Anambra", capital:"Awka"},
    ]
    
    for (i=0; i<states.length; i+=1){
        state = states.at(i);
        response = prompt("What is the capital of ".concat(state.name).concat("? "))
        if (response.toLowerCase().includes("quit")){
            break;
        }else if(response.toLowerCase() === state.capital.toLowerCase()){
            console.log("That's correct!")
        }else{
            console.log("That's wrong, the capital of ".concat(state.name).concat(" is ").concat(state.capital))
        }
    
    }    

}

play();