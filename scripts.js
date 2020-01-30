// Hide Upper Keyboard on page load: //
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0;
let letterCounter = 0;
let m = 0;
let numberOfMistakes = 0;
let numberOfWords = 0;



let timerStart = 0
let timerEnd = 0
let started = 0
$('#keyboard-upper-container').hide();
$('#sentence').text(sentences[sentenceCounter]);
$('#target-letter').text(sentences[sentenceCounter][letterCounter]);


$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
    let letter = e.key.charCodeAt(0);
    let id = $(`#${letter}`);
    $(id).css('background-color', 'yellow');

})

$(document).keypress(function (e) {

   
// // //     initialize a game state var in a global scope check if true, if not true then initialize to be true, then start timer at that point, when game is over take the initailize to false.
   


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
        m++
        $('#yellow-block').css('left', '+=17.5px')
        $('#feedback').append($('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'))



    } else if (sentences[sentenceCounter].charCodeAt(letterCounter) != e.which) {
        $('#feedback').append($('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'))
        numberOfMistakes++
    }

    if (letterCounter == sentences[sentenceCounter].length) {
        $('#target-letter').empty();
        $('#sentence').empty();
        $('#feedback').text('')

        sentenceCounter++
        letterCounter = 0
        $('#sentence').text(sentences[sentenceCounter]);
        $('#yellow-block').css({
            'left': '29px'
        })
        m = 0
    };
    if (sentenceCounter == sentences.length) {
        // timerEnd = new Date();
        // console.log(timerEnd)
        // let diff = (timerEnd - timerStart);
        // console.log(diff)
        // let seconds = Math.floor(diff / 1000);
        // console.log(seconds);
        // let minutes = Math.floor(seconds / 60);
        // console.log(minutes);
        // let wpm = numberOfWords / minutes - 2 * numberOfMistakes;
        // console.log(wpm)
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').hide();
        $('#32').hide();
        $('#prompt-container').empty();
        $('.container').append('<p class = "end-message"> All Done! Play Again?</p>', '<p class ="timer">' + wpm + '</p>');
        $('.end-message').css({
            'text-align': 'center',
            'font-size': '60px',
            'font-family': 'Courier New, Courier, monospace',
        })
        $('.container').append('<p id = "button"><button class = "play-again"> Play Again </button></p>');
        $('#button').css({
            'text-align' : 'center',
            'font-size': '40px',
            'font-family': 'Courier New, Courier, monospace',
        })




    }


});

$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
    let letter = e.key.charCodeAt(0);
    let id = $(`#${letter}`);
    $(id).css('background-color', "#f5f5f5")
});


