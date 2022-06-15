/*========================
    GLOBAL VARIABLES
========================*/


let number_cards;
let i;

let card_options = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]
let card_game = [];


/*========================
    AUXILIAR FUNCTIONS
========================*/




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

}

/* Generates the game deck that'll be played */
function game_deck() {

    for (i = 0; i < (number_cards / 2); i++) {
        let card = card_options[i];

        for (let j = 0; j < 2; j++) {
            card_game.push(card);
        }

    }

    /* Game deck without shuffling */
    console.log(card_game);

}