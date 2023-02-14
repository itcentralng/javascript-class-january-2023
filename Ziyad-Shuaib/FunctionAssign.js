const prompt = require('prompt-sync')();

Game = [
    {State: "Abia", Capital: "Umuahia" },
    {State:"Adamawa" , Capital: "Yola"} ,
    {State: "Akwa Ibom", Capital:"Uyo"},
    {State: "Anambra", Capital:"Awka"},
    {State: "Bauchi", Capital:"Bauchi"},
    {State:"Bayelsa" , Capital:"Yenagoa"},
    {State:"Benue" , Capital:"Makurdi"},
    {State:"Bornu" , Capital:"Maiduguri"},
    {State:"Cross-River" , Capital:"Calabar"},
    {State:"Delta" , Capital:"Asaba"},
    {State:"Ebonyi" , Capital:"Abakaliki"},
    {State: "Edo", Capital:"Benin city"},
    {State:"Ekiti" , Capital:"Ado-Ekiti"},
    {State: "Enugu", Capital:"Enugu"},
    {State: "Gombe", Capital:"Gombe"},
    {State: "Imo", Capital:"Owerri"},
    {State: "Jigawa", Capital:"Dutse"},
    {State:"Kaduna",  Capital:"Kaduna"},
    {State:"Kano" , Capital:"Kano"},
    {State: "Katsina", Capital:"Katsina"},
    {State: "Kebbi" , Capital:"Birnin-Kebbi"},
    {State:"Kogi" , Capital:"Lokoja"},
    {State: "Kwara", Capital:"Ilorin"},
    {State: "Lagos", Capital:"Ikeja"},
    {State: "Nasarawa", Capital:"Lafia"},
    {State: "Niger", Capital:"Minna"},
    {State:"Ogun" , Capital:"Abeokuta"},
    {State: "Ondo", Capital:"Akure"},
    {State:"Osun", Capital:"Oshogbo"},
    {State: "Oyo", Capital:"Ibadan"},
    {State: "Plateau",  Capital:"Jos"},
    {State: "Rivers", Capital:"Port Harcourt"},
    {State: "Sokoto", Capital:"Sokoto"},
    {State: "Taraba", Capital:"Jalingo"},
    {State: "Yobe", Capital:"Damaturu"},
    {State:"Zamfara", Capital:"Gusau"},
]


const printGame = (Game)=>{
    Player = prompt("Hello, What is your name? ");
    
    
    for(i = 0; i <=Game.length; i++){
        Continue = prompt("Do you want to play? (Yes/No)");
        if(Continue == 'Yes'){
        statenCap = prompt("What is the capital of " .concat(Game.at(i).State));
        if (statenCap == Game.at(i).Capital ){
            Answers.push(Game.at(i).State.Capital)
    
        }
        

    }else{
        console.log('Thank You For Playing')
    }
 }


}

printGame(Game)