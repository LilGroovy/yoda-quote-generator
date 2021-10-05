const quoteArray = [
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.",
    "Always pass on what you have learned.", 
    "Patience you must have my young Padawan.", 
    "In a dark place we find ourselves, and a little more knowledge lights our way.",
    "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.",
    "Powerful you have become, the dark side I sense in you.",
    "Feel the force!"
];

function newQuote () {
    var randomNumber = Math.floor((Math.random()) * (quoteArray.length));
    document.getElementById("quote").innerHTML = quoteArray[randomNumber];
}