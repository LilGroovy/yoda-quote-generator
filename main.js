const quoteArray = [
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will.",
    "Always pass on what you have learned.", 
    "Patience you must have my young Padawan.", 
    "In a dark place we find ourselves, and a little more knowledge lights our way.",
    "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.",
    "Powerful you have become, the dark side I sense in you.",
    "Feel the force!",
    "Truly wonderful the mind of a child is.",
    "Do or do not. There is no try.",
    "Great warrior. Wars not make one great.",
    "Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.",
    "The dark side clouds everything. Impossible to see the light, the future is.",
    "You will find only what you bring in.",
    "To be Jedi is to face the truth, and choose. Give off light, or darkness, Padawan. Be a candle, or the night.",
    "I love sleep; it´s my favorite - Kanye West",
    "Control, control, you must learn control!",
    "On many long journeys have I gone. And waited, too, for others to return from journeys of their own. Some return; some are broken; some come back so different only their names remain.",
    "In the end, cowards are those who follow the dark side.",
    "Difficult to see. Always in motion is the future.",
    "Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away… to the future, to the horizon. Never his mind on where he was. Hmm? What he was doing. Hmph. Adventure. Heh. Excitement. Heh. A Jedi craves not these things. You are reckless.",
    "Secret, shall I tell you? Grand Master of Jedi Order am I. Won this job in a raffle I did, think you? ‘How did you know, how did you know, Master Yoda?’ Master Yoda knows these things. His job it is.",
    "To answer power with power, the Jedi way this is not. In this war, a danger there is, of losing who we are.",
    "Many of the truths that we cling to depend on our point of view.",
    "Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall."
];

function newQuote () {
    var randomNumber = Math.floor((Math.random()) * (quoteArray.length));
    document.getElementById("quote").innerHTML = quoteArray[randomNumber];
}