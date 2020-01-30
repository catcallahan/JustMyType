// Hide Upper Keyboard on page load: //
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0
let letterCounter = 0
let m = 0


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
    if (sentences[sentenceCounter].charCodeAt(letterCounter) == e.which) {
        $('#target-letter').text(sentences[sentenceCounter].charAt(letterCounter + 1))
        if(sentences[sentenceCounter].charCodeAt(letterCounter + 1)== 32){
            $('#target-letter').text('Space')
            $('#target-letter').css('color', 'lightgrey')
        } else {
            $('#target-letter').css('color', 'black')
        }
        letterCounter++
        m++
        $('#yellow-block').css({
            'left': `${(15 * m)}px`
        })

        $('#feedback').append($('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'))
        

        
    } else if(sentences[sentenceCounter].charCodeAt(letterCounter) != e.which){
                $('#feedback').append($('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'))
        
            }
            
    if (letterCounter == sentences[sentenceCounter].length) {
        $('#target-letter').empty();
        $('#sentence').empty();
        $('#feedback').text('')

        sentenceCounter++
        letterCounter = 0
        $('#sentence').text(sentences[sentenceCounter]);
        $('#yellow-block').css({
            'left': '15px'
        })
        m = 0
    };

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


