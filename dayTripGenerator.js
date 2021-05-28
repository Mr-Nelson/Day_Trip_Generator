"use strict"

let destination = ["Los Angeles", "New York City", "Chicago", "Baghdad"];
let restaurant = ["pizza parlor", "italian restaurant", "kebab stand", "ice cream shop", "mexican restaurant"];
let modeOfTransportation = ["vehicle", "public transport", "shoebaru", "bicycle"];
let entertainment = ["movie", "walk", "night cap", "dueling pianos"];

function generateDestination(array){
    let randomIndex = Math.floor((Math.random()*array.length-1)+1);
    let choice = array[randomIndex];
    let acceptDecline = confirm(choice);
        if(acceptDecline == true){
            return choice;
        }
        else if(acceptDecline == false){
            return generateDestination(destination);
        }   
}
//console.log('test',generateDestination);
function generateRestaurant(array){
    let randomIndex = Math.floor((Math.random()*array.length-1)+1);
    let choice = array[randomIndex];
    let acceptDecline = confirm(choice);
        if(acceptDecline == true){
            return choice;
        }
        else{
            return generateRestaurant(restaurant);
        }
 }

function generateModeOfTransportation(array){
    let randomIndex = Math.floor((Math.random()*array.length-1)+1);
    let choice = array[randomIndex];
    let acceptDecline = confirm(choice);
        if(acceptDecline == true){
            return choice;
        }
        else{
            return generateModeOfTransportation(modeOfTransportation);
        }
}

function generateEntertainment(array){
    let randomIndex = Math.floor((Math.random()*array.length-1)+1);
    let choice = array[randomIndex];
    let acceptDecline = confirm(choice);
        if(acceptDecline == true){
            return choice;
        }
        else{
            return generateEntertainment(entertainment);
        }
}

function commandPrompt(initialPrompt){
    let chooseDestination = generateDestination(destination);
    let chooseRestaurant = generateRestaurant(restaurant);
    let chooseModeOfTravel = generateModeOfTransportation(modeOfTransportation);
    let chooseEntertainment = generateEntertainment(entertainment);
    console.log(chooseDestination,",",chooseRestaurant,",",chooseModeOfTravel,",",chooseEntertainment);
    let acceptDecline = confirm("Everything look good?");
    if(acceptDecline == true){
        console.log("Enjoy your trip!");        
    }
    else {
        return commandPrompt(false);
    }
}
let initialPrompt = confirm("Would you like to generate a random trip?");
if (initialPrompt == true){
    commandPrompt(true);
}
else {
    initialPrompt;
}