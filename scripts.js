$(function(){
    var playerOne = prompt('What is your name?'),
        playerTwo = prompt('What is your name?'),
        activePlayer = Math.random() <= 0.5 ?  playerOne : playerTwo;

    instruct(activePlayer + " is first");

    $('td').click(function(){
        if(activePlayer == playerOne){
            if($(this).text() == ''){
                $(this).text('x');
                checkWinner();
            } else {
                alert('that box has already been used.');
                return;
            }
            activePlayer = playerTwo;
            instruct(activePlayer + ' is up');
        } else {
            if($(this).text() == ''){
                $(this).text('o');
                checkWinner();
            } else {
                alert('that box has already been used.');
                return;
            }
            activePlayer = playerOne;
            instruct(activePlayer + ' is up');
        }
    });


    function checkWinner() {
        var one = '#one',
            two = '#two',
            three = '#three',
            four = '#four',
            five = '#five',
            six = '#six',
            seven = '#seven',
            eight = '#eight',
            nine = '#nine';

        //check for win top row
        if($(one).text() !== '') {
            console.log('match');
            if($(one).text() == $(two).text()){
                if($(one).text() == $(three).text()) {
                    alert(activePlayer + ' wins!');

                }
            }
        }

        //middle row
        if($(four).text() !== '') {
            console.log('match');
            if($(four).text() == $(five).text()){
                if($(four).text() == $(six).text()) {
                    alert(activePlayer + ' wins!');
                }
                console.log(four + five);
            }
        }
        //bottom row
        if($(seven).text() !== '') {
            console.log('match');
            if($(seven).text() == $(eight).text()){
                if($(seven).text() == $(nine).text()) {
                    alert(activePlayer + ' wins!');
                }
            }
        }
        //first column
        if($(one).text() !== '') {
            console.log('match');
            if($(one).text() == $(four).text()){
                if($(one).text() == $(seven).text()) {
                    alert(activePlayer + ' wins!');
                }
            }
        }

        //second column
        if($(two).text() !== '') {
            console.log('match');
            if($(two).text() == $(five).text()){
                if($(two).text() == $(eight).text()) {
                    alert(activePlayer + ' wins!');
                }
            }
        }
        //third column
        if($(three).text() !== '') {
            console.log('match');
            if($(three).text() == $(six).text()){
                if($(three).text() == $(nine).text()) {
                    alert(activePlayer + ' wins!');
                }
            }
        }

//                //top-left diagonal
        if($(one).text() !== '') {
            console.log('match');
            if($(one).text() == $(five).text()){
                if($(one).text() == $(nine).text()) {
                    alert(activePlayer + ' wins!');
                }
            }
        }

        //top-right diagonal
        if($(three).text() !== '') {
            console.log('match');
            if($(three).text() == $(five).text()){
                if($(three).text() == $(seven).text()) {
                    alert(activePlayer + ' wins!');
                }
            }
        }

    }

});
function instruct(message){
    $('#instructions').text(message);
}

