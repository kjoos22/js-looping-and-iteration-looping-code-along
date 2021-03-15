// Code your solutions in this file
// Code your solutions in this file
function writeCards(names, event) {
    let cards = [];
    for(let x = 0; x <= names.length - 1; x++) {
        cards.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(start) {
    while (start >= 0) {
        console.log(start);
        start--;
    }
}