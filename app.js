//tenemos 3 objetos 2 barras y la pelota

// funcion para el pizarra
(function(){
    self.Board = function (width, height){
        this.width = width;
        this.height = height;
        this.playing= false;
        this.game_over= false;
        this.bars = [];
        this.ball = null;
        this.playing = false;
    }

    self.Board.prototype = {
        get elements(){
            var elements = this.bars.map(function(bar){return bar;});
            elements.push(this.ball);
            return elements;
        }
    }
})();
//funcion para dibujar todos los elementos en la vista
(function(){
    self.BoardView = function (canvas,board){
        this.canvas= canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }

})();
//barras 
(function(){
    self.Bar = function(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed= 20;

    }
    self.Bar.prototype ={
        down: function(){
            this.y += this.speed;
        },
        up: function(){
            this.y -= this.speed;

        },
    }
})();


//pintar pizarra en index canvas...
var board = new Board(800,400);
console.log(board);
var bar = new Bar (20,150,10,100,board)
var bar2 = new Bar (770,150,10,100,board)
var canvas = document.getElementById('canvas');
var board_view = new BoardView(canvas, board);
var ball = new Ball(350,200,7,board);