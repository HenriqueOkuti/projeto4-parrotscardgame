/*========================
    GLOBAL VARIABLES
========================*/


let number_cards;
let i;

let card_options = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let card_game = [];

let firstcard;
let secondcard;

let moves = 0;
let points = 0;

/*========================
    AUXILIAR FUNCTIONS
========================*/

/* Generates the game deck that'll be played */
function game_deck() {

    for (i = 0; i < (number_cards / 2); i++) {
        let card = card_options[i];

        for (let j = 0; j < 2; j++) {
            card_game.push(card);
        }

    }

    card_game.sort(deck_shuffle);

    /* Game deck after shuffling */
    console.log(card_game);

}

function deck_shuffle() {
    return Math.random() - 0.5;
}

function reset_cards() {

    firstcard = undefined;
    secondcard = undefined;

    const cards = document.querySelectorAll(".card");
    for (const card of cards) {
        card.classList.remove("no-events");
    }
    
}

function reset_cards2() {

    firstcard.classList.remove("turned");
    secondcard.classList.remove("turned");

    reset_cards();

}


/*========================
    MAIN FUNCTIONS
========================*/

/* Number of cards on page load */
function start_prompt() {

    number_cards = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    while (isNaN(number_cards) || number_cards < 4 || number_cards > 14 || (number_cards % 2 != 0)) {

        number_cards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }

    /* Number of cards that'll be played */
    console.log(`Number of cards: ${number_cards}`);

    game_deck();
    game_spread();

}


function game_spread() {
    const game_box = document.querySelector(".game_box");

    for (i = 0; i < number_cards; i++) {

        let card = `<div class="card" onclick="turn(this);">
        <div class="front-face face" data-identifier="front-face"><img src="files/front.png" /></div>
        <div class="back-face face" data-identifier="back-face"><img src='files/${card_game[i]}.gif'></div>
        </div>`;

        game_box.innerHTML = game_box.innerHTML + card;
    }
}

function turn(choice) {

    /* Makes it not able to click on the same card */
    if (secondcard === undefined && choice.classList.contains("turned")) {
        return;
    }

    moves = moves + 1;
    choice.classList.add("turned");

    if (firstcard === undefined) {
        firstcard = choice;
    }
    else {
        secondcard = choice;
        const cards = document.querySelectorAll(".card");
        for (const card of cards) {
            card.classList.add("no-events");
        }

    }

    if (firstcard !== undefined && secondcard !== undefined) {
        if (firstcard.innerHTML === secondcard.innerHTML) {
            points = points + 2;
            reset_cards();
            if (points == number_cards){
                alert(`Você ganhou em ${moves} jogadas!`);
            }
        }
        else {
            setTimeout(reset_cards2, 1000);
        }
    }

}
