// Hide Upper Keyboard on page load: //
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0
let letterCounter = 0
let m = 0

$('#keyboard-upper-container').hide();
$('#sentence').append(sentences[0]);


$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
    let letter = e.key.charCodeAt(0);
    let id = $(`#${letter}`);
    $(id).css('background-color', 'yellow');

   
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

$(document).keypress(function(e){
    for(i=0; i < sentences.length; i++){
    sentenceCounter++
        for(a = 0; a<sentences[i].length; a++){
            for(x = 0; x<sentences[i][a].length; x++)
            if(sentences[i][a].charCodeAt(x) == e.which){
               letterCounter++
               m++
               $('#yellow-block').css({
                   'margin-left' :`${(15 * m)}px`
               })
               return
            }
            if(letterCounter == 47){
                $('#sentence').append(sentences[0]);
                return
            }
        }
    }
})