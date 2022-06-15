/*========================
    GLOBAL VARIABLES
========================*/


let number_cards;


/*========================
    AUXILIAR FUNCTIONS
========================*/




/*========================
    MAIN FUNCTIONS
========================*/


function start_prompt() {

    number_cards = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    while ( isNaN(number_cards) || number_cards < 4 || number_cards > 14){

        number_cards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
        console.log(`Number of cards: ${number_cards}`);

    }

}

