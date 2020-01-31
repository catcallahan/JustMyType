// -- Variables & Counters --- //
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0;
let letterCounter = 0;
let numberOfMistakes = 0;
let numberOfWords = 0;
let gameStart = false
let timerEnd = 0
let started = 0

// -------------------------- On Page load----------------------//

$('#keyboard-upper-container').hide();
$('#sentence').text(sentences[sentenceCounter]);
$('#target-letter').text(sentences[sentenceCounter][letterCounter]);


// ---- Start Timer -----//
let timerStart = Date.now();


// ------ Change boards when pressing shift ------//
$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
    //---- Change color of pressed key on onscreen keyboard ---//
    let letter = e.key.charCodeAt(0);
    let id = $(`#${letter}`);
    $(id).css('background-color', 'yellow');

});

// -------------------- Game Play Start -----------------------//

$(document).keypress(function (e) {
    if (gameStart = false) {
        gameStart = true 
    }

    // -- Check key press to correct sentence index ---//

    if (sentences[sentenceCounter].charCodeAt(letterCounter) == e.which) {

        $('#target-letter').text(sentences[sentenceCounter].charAt(letterCounter + 1))
        if (sentences[sentenceCounter].charCodeAt(letterCounter + 1) == 32) {
            $('#target-letter').text('Space')
            $('#target-letter').css('color', 'lightgrey')
            numberOfWords++
        } else {
            $('#target-letter').css('color', 'black')
        }
        letterCounter++

        // --- Move Yellow Block along sentence when correct letter pressed ---//
        $('#yellow-block').css('left', '+=17.5px')

        //--- Insert green check if correct letter ---- //
        $('#feedback').append($('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'))

        //------- Insert x mark if not correct letter ---- //
    } else if (sentences[sentenceCounter].charCodeAt(letterCounter) != e.which) {
        $('#feedback').append($('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'))
        numberOfMistakes++
    }

    // --- Change to another sentence when current one is completed --- //
    if (letterCounter == sentences[sentenceCounter].length) {
        $('#target-letter').empty();
        $('#sentence').empty();
        $('#feedback').text('')
        sentenceCounter++
        letterCounter = 0
        $('#sentence').text(sentences[sentenceCounter]);
        
        //--- Reset Yellow Block ---//
        $('#yellow-block').css({
            'left': '29px'
        })
        
    };

    // -------------------- Game End ---------------------------------//
    if (sentenceCounter == sentences.length) {
        // --- End timer and calculate wpm --//
        gameStart = false;
        timerEnd = Date.now();
        diff = (timerEnd - timerStart)/1000
        minutes = diff/60
        let wpm = Math.floor((54 / minutes) - (2 * numberOfMistakes))
        

        //--- Create End page and restart button --//
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').hide();
        $('#32').hide();
        $('#prompt-container').empty();
        $('.container').append('<p class = "end-message"> All Done! Play Again?</p>');
        $('.end-message').css({
            'text-align': 'center',
            'font-size': '60px',
            'font-family': 'Courier New, Courier, monospace',
        })
        $('.container').append('<p id = "button"><button class = "play-again"> Play Again </button></p>');
        $('#button').css({
            'text-align': 'center',
            'font-size': '40px',
            'font-family': 'Courier New, Courier, monospace',
        })
        $('#button').prepend('<p id = "wpm">' + wpm + '</p>')
    }
});

//--- change keys back to original color when not being pressed ---//
$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
    let letter = e.key.charCodeAt(0);
    let id = $(`#${letter}`);
    $(id).css('background-color', "#f5f5f5")
});