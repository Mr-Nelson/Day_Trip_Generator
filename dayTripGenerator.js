"use strict"

let destination = ["Los Angeles", "New York City", "Chicago", "Baghdad"];
let restaurant = ["pizza parlor", "italian restaurant", "kebab stand", "ice cream shop", "mexican restaurant"];
let modeOfTransportation = ["vehicle", "public transport", "shoebaru", "bicycle"];
let entertainment = ["movie", "walk", "night cap", "dueling pianos"];

function generateDestination(array){
    let choice = Math.floor((Math.random()*array.length-1)+1);
    choice = choice.toString();
    choice = (array[choice]);
    return choice
}

function generateRestaurant(array){
    let choice = Math.floor((Math.random()*array.length-1)+1);
    choice = choice.toString();
    choice = (array[choice]);
    return choice
}

}function generateModeOfTransportation(array){
    let choice = Math.floor((Math.random()*array.length-1)+1);
    choice = choice.toString();
    choice = (array[choice]);
    return choice
}

}function generateEntertainment(array){
    let choice = Math.floor((Math.random()*array.length-1)+1);
    choice = choice.toString();
    choice = (array[choice]);
    return choice
}
