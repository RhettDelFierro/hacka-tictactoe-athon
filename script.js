var title = $("<div class='title'><h1>Tic - Tac - <span class='black'>Tarantino</span></h1></div>");
var player1;
var player2;
var turn = 0;

var size;
var swap = 0;

var theme_music = true;


//no prototypes because it's just one object.
function Board_Constructor(size) {
    var self = this;
    self.number_of_cards = size*size; //count down for tie.
    self.create_self = function(){
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

            board_option1 = $("<div class='board_option1'><button>3 Rows</button></div>"),

            reboot = $("<div class='reboot'><button class='reset'>Reset</button><button id='theme_music'>Stop Music</button></div>");
        //appending
        $(row_1).append(box_1, box_2, box_3);
        $(row_2).append(box_4, box_5, box_6);
        $(row_3).append(box_7, box_8, box_9);

        $(game_container1).append(row_1, row_2, row_3);
        $("body").append(title, reboot, player_1, player_2);

        $(game_container1).show();
        $("body").append(title, reboot, player_1, game_container1, player_2);
        $(".box").addClass("black_background");
        size = 3;
        $(player_1).find('h1').remove();
        $(player_2).find('h1').remove();
        $(player_1).find('img').remove();
        $(player_2).find('img').remove();
        player1 = new Player("one");
        player2 = new Player("two");
    };
    self.cards_do_your_thing = function (clickedVariable, playerTurn) {
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
        for (var x in cards) {
            console.log(x);
            for (i = 0; i < x.length; i++) {
                if (clickedVariable === cards[x][i]) {
                    console.log('found a match!');
                    console.log(cards[x][i]);
                    playerTurn[x] += 1;
                    self.win_condition_check();
                }
            }
        }
    };
    self.win_condition_check = function () {
        for (var x in player1) {
            if (player1[x] === size) {
                player1.win = true;
                alert("player 1 wins!");
                self.boardReset();
            } else if(self.number_of_cards === 0 && player1.win !== true){
                alert('tie!');
                self.boardReset();
                break;

            }
        }

        for (x in player2) {
            if (player2[x] === size) {
                player2.win = true;
                alert("player 2 wins!");
                self.boardReset();
            } else if(self.number_of_cards === 0 && player2.win !==true){
                alert('tie!');
                self.boardReset();
                break;

            }
        }
    };
    self.boardReset = function() {
        window.location.reload();
    };
    self.increment = function() {
        swap++;
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
    this.win === false;
}

//===============document ready function start==============//

$(document).ready(function () {
    board = new Board_Constructor(3);
    board.create_self();


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
            board.increment();

        } else {
            //player 2 gets to go
            var y = $('<img>').attr('src', 'images/meteor_hammer.png');
            meteor_hammer.play();
            //$(this).append(y);
            $(this).addClass("o");
            board.cards_do_your_thing(variableFromCardClass, player2);
            board.increment();
        }
    });
//========= Reset ==============//

    $('.reset').click(function () {
        $('.box').removeClass('marked');
        $('.b2_box').removeClass('marked');
        board.boardReset();
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
