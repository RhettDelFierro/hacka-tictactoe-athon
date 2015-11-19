var title = $("<div class='title'><h1>Tic - Tac - <span class='black'>Tarantino</span></h1></div>");
var player1;
var player2;
var turn = 0;

var size;
var swap = 0;

var theme_music = true;

//dynamic board creation for 3x3 and 5x5
var win = $('<h1>');
var lose = $('<img>').attr('src', 'images/Blood-Slash.png').addClass('tally');
var player_1 = $("<div class='player_1'><h2>Kiddo</h2></div>"),
    player_2 = $("<div class='player_2'><h2>O-Ren Ishii</h2></div>"),
    game_container1 = $("<div class='game_container1'></div>"),
    row_1 = $("<div class='row row_1'></div>"),
    box_1 = $("<div class='box one col1 dia1' id='box_1'></div>"),
    box_2 = $("<div class='box two col2' id='box_2'></div>"),
    box_3 = $("<div class='box three col3 dia2' id='box_3'></div>"),
    row_2 = $("<div class='row row_2'></div>"),
    box_4 = $("<div class='box four col1' id='box_4'></div>"),
    box_5 = $("<div class='box five col2 dia1 dia2' id='box_5'></div>"),
    box_6 = $("<div class='box six col3' id='box_6'></div>"),
    row_3 = $("<div class='row row_3'></div>"),
    box_7 = $("<div class='box seven col1 dia2' id='box_7'></div>"),
    box_8 = $("<div class='box eight col2' id='box_8'></div>"),
    box_9 = $("<div class='box nine col3 dia1' id='box_9'></div>"),
    //game_container2 = $("<div class='game_container2'></div>"),
    //b2_row1 = $("<div class='b2_row b2_row1'></div>"),
    //b2_box1 = $("<div class='b2_box b2_box1 b2_col1 b2_dia1'></div>"),
    //b2_box2 = $("<div class='b2_box b2_box2 b2_col2'></div>"),
    //b2_box3 = $("<div class='b2_box b2_box3 b2_col3'></div>"),
    //b2_box4 = $("<div class='b2_box b2_box4 b2_col4'></div>"),
    //b2_box5 = $("<div class='b2_box b2_box5 b2_col5 b2_dia2'></div>"),
    //b2_row2 = $("<div class='b2_row b2_row2'></div>"),
    //b2_box6 = $("<div class='b2_box b2_box6 b2_col1'></div>"),
    //b2_box7 = $("<div class='b2_box b2_box7 b2_col2 b2_dia1'></div>"),
    //b2_box8 = $("<div class='b2_box b2_box8 b2_col3'></div>"),
    //b2_box9 = $("<div class='b2_box b2_box9 b2_col4 b2_dia2'></div>"),
    //b2_box10 = $("<div class='b2_box b2_box10 b2_col5'></div>"),
    //b2_row3 = $("<div class='b2_row b2_row3'></div>"),
    //b2_box11 = $("<div class='b2_box b2_box11 b2_col1'></div>"),
    //b2_box12 = $("<div class='b2_box b2_box12 b2_col2'></div>"),
    //b2_box13 = $("<div class='b2_box b2_box13 b2_col3 b2_dia1 b2_dia2'></div>"),
    //b2_box14 = $("<div class='b2_box b2_box14 b2_col4'></div>"),
    //b2_box15 = $("<div class='b2_box b2_box15 b2_col5'></div>"),
    //b2_row4 = $("<div class='b2_row b2_row4'></div>"),
    //b2_box16 = $("<div class='b2_box b2_box16 b2_col1'></div>"),
    //b2_box17 = $("<div class='b2_box b2_box17 b2_col2 b2_dia2'></div>"),
    //b2_box18 = $("<div class='b2_box b2_box18 b2_col3'></div>"),
    //b2_box19 = $("<div class='b2_box b2_box19 b2_col4 b2_dia1'></div>"),
    //b2_box20 = $("<div class='b2_box b2_box20 b2_col5'></div>"),
    //b2_row5 = $("<div class='b2_row b2_row4'></div>"),
    //b2_box21 = $("<div class='b2_box b2_box21 b2_col1 b2_dia2'></div>"),
    //b2_box22 = $("<div class='b2_box b2_box22 b2_col2'></div>"),
    //b2_box23 = $("<div class='b2_box b2_box23 b2_col3'></div>"),
    //b2_box24 = $("<div class='b2_box b2_box24 b2_col4'></div>"),
    //b2_box25 = $("<div class='b2_box b2_box25 b2_col5 b2_dia1'></div>"),
    //board_options = $("<div class='board_options'></div>"),
    //board_option1 = $("<div class='board_option1'><button>3 Rows</button></div>"),
    //board_option2 = $("<div class='board_option2'><button>5 Rows</button></div>"),
    //reboot = $("<div class='reboot'><button class='reset'>Reset</button><button id='theme_music'>Stop Music</button></div>");

//==============increment to swap between players===============//

function increment() {
    swap++;
    //board.turn_indicator =
}

//============== Resets board and images ============= //

function boardReset() {
    $('div').removeClass('marked');
    $(player_1).find('h1').remove();
    $(player_2).find('h1').remove();
    $(player_1).find('img').remove();
    $(player_2).find('img').remove();
    $(".box").removeClass("x").removeClass("o").removeClass("marked").addClass("black_background").removeClass("yellow_background");
    $(".b2_box").removeClass("x").removeClass("o").removeClass("marked").addClass("black_background").removeClass("yellow_background");
    $("body").find(game_container1).hide();
    $("body").find(game_container2).hide();
    $(board_options).show();
    $("body").append(title, reboot, player_1, board_options, player_2);

    swap = 0;
    turn = 0;

}
//***********************************************OOP Board*******************************************//
var board = {};
board.number_of_cards = size; //count down for tie.
board.cards_do_your_thing = function (clickedVariable, playerTurn) {
    console.log('called :', clickedVariable, playerTurn);
    board.number_of_cards--;
    var cards = {
        row1: ["box_1", "box_2", "box_3"],
        row2: ["box_4", "box_5", "box_6"],
        row3: ["box_7", "box_8", "box_9"],
        col1: ["box_1", "box_4", "box_7"],
        col2: ["box_2", "box_5", "box_8"],
        col3: ["box_3", "box_6", "box_9"],
        diag1: ["box_1", "box_5", "box_9"],
        diag2: ["box_3", "box_5", "box_7"]
    };
    for(var x in cards){
        console.log(x);
        for (i=0; i < x.length; i++){
            if (clickedVariable === cards[x][i]){
                console.log('found a match!');
                //playerTurn.x.text++;
                //var concatenate = x.text;
                console.log(cards[x][i]);
                playerTurn[x]++;
                win_condition_check();
            }
        }
    }
};
//if player one clicks, that has a property that can be sent to the board.


//***********************************************WIN CONDITION***************************************//
function win_condition_check() {
    for (var x in player1) {
        if (player1[x] === size) {
            alert("player 1 wins!");
            boardReset();
        }
    }

    for (x in player2) {
        if (player2[x] === size) {
            alert("player 2 wins!");
            boardReset();
        }
    }
}

//************************************************CONSTRUCTOR*****************************************//
function Player(player_number) {
    this.number = player_number;
    this.row1 = 0;
    this.row2 = 0;
    this.row3 = 0;
    this.col1 = 0;
    this.col2 = 0;
    this.col3 = 0;
    this.diag1 = 0;
    this.diag2 = 0;

}

//===============document ready function start==============//

$(document).ready(function () {

//=================dynamic board creation ============//

    $(row_1).append(box_1, box_2, box_3);
    $(row_2).append(box_4, box_5, box_6);
    $(row_3).append(box_7, box_8, box_9);
    $(b2_row1).append(b2_box1, b2_box2, b2_box3, b2_box4, b2_box5);
    $(b2_row2).append(b2_box6, b2_box7, b2_box8, b2_box9, b2_box10);
    $(b2_row3).append(b2_box11, b2_box12, b2_box13, b2_box14, b2_box15);
    $(b2_row4).append(b2_box16, b2_box17, b2_box18, b2_box19, b2_box20);
    $(b2_row5).append(b2_box21, b2_box22, b2_box23, b2_box24, b2_box25);
    $(board_options).append(board_option1, board_option2);
    $(game_container1).append(row_1, row_2, row_3);
    $(game_container2).append(b2_row1, b2_row2, b2_row3, b2_row4, b2_row5);
    $("body").append(title, reboot, player_1, board_options, player_2);

//=================3x3 Board Creation==================//

    $(board_option1).on('click', function () {
        player1 = new Player("one");
        player2 = new Player("two");
        $(board_options).hide();
        $(game_container1).show();
        $("body").append(title, reboot, player_1, game_container1, player_2);
        $(".box").addClass("black_background");
        size = 3;
        $(player_1).find('h1').remove();
        $(player_2).find('h1').remove();
        $(player_1).find('img').remove();
        $(player_2).find('img').remove();
    });
//============5x5 board Creation============//
//    $(board_option2).on('click', function () {
//
//        player1 = new Player("one");
//        player2 = new Player("two");
//        $(board_options).hide();
//        $(game_container2).show();
//        $("body").append(title, reboot, player_1, game_container2, player_2);
//        $(".b2_box").addClass("black_background");
//        size = 5;
//        $(player_1).find('h1').remove();
//        $(player_2).find('h1').remove();
//        $(player_1).find('img').remove();
//        $(player_2).find('img').remove();
//    });

//=================Image Append 3x3 board==================//
    $(document).on('click', '.box', function () {
        $(this).addClass('marked');
        var variableFromCardClass = $(this).attr("id");
        console.log('hi');
        if (swap % 2 === 0) {
            //player 1 gets to go
            var x = $('<img>').attr('src', 'images/samurai_swords.png');
            //$(this).append(x);
            sword.play();
            $(this).addClass("x").removeClass("black_background").addClass("yellow_background");
            $(this).attr('marked', 'true');
            board.cards_do_your_thing(variableFromCardClass, player1);
            increment();

        } else {
            //player 2 gets to go
            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
            meteor_hammer.play();
            //$(this).append(y);
            $(this).addClass("o");
            board.cards_do_your_thing(variableFromCardClass, player2);
            increment();
        }
        //increment();
    });

//============Append Image 5x5 board============//
//
//    $(document).on('click', '.b2_box', function () {
//        $(this).addClass('marked');
//        console.log('hi');
//        var variableFromCardClass = $(this).attr("id");
//        if (swap % 2 === 0) {
//            //player 1 gets to go
//            //var x = $('<img>').attr('src', 'images/samurai_swords.png');
//            //$(this).append(x);
//            sword.play();
//            $(this).addClass("x").addClass("marked").removeClass("black_background").addClass("yellow_background");
//            var x = $('<img>').attr('src', 'images/samurai_swords.png');
//            board.cards_do_your_thing(variableFromCardClass, player1);
//
//        } else {
//            //player 2 gets to go
//            meteor_hammer.play();
//            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
//            //$(this).append(y);
//            $(this).addClass("o");
//            board.cards_do_your_thing(variableFromCardClass, player2);
//        }
//        increment();
//    });

//========= Reset ==============//

    $('.reset').click(function () {
        $('.box').removeClass('marked');
        $('.b2_box').removeClass('marked');
        boardReset();
    });
//========= Theme Music ==============//

    kill_bill_mix.play();

    $("#theme_music").on('click', function () {
        if (theme_music === true) {
            theme_music = false;
            kill_bill_mix.pause();
            $("#theme_music").html("Play Music")
        } else {
            kill_bill_mix.play();
            $("#theme_music").html("Stop Music");
            theme_music = true;
        }
    });

});
//=====End Document Ready Function =======//
