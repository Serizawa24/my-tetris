import { 
    COLS,
    ROWS ,
    BLOCK_SIZE ,
    COLOR_MAPPING,
    WHITE_COLOR_ID ,
    ctx,
} from './config.js';

class Board {
    constructor(ctx){
        this.ctx = ctx;
        this.grid = this.generateWhiteBoard();
        this.score = 0;
        this.gameOver = false;
        this.isPlaying = false;
        this.clearAudio = new Audio(`./sound/clear.wav`);
        this.moveAudio = new Audio('./sound/move.wav');
        this.successAudio = new Audio('./sound/success.wav');
        this.bgm = new Audio('./sound/Tetris.mp3');
    }

    generateWhiteBoard(){
        return Array.from({length:ROWS},()=> Array(COLS).fill(WHITE_COLOR_ID))
    }

    drawCell(xAxis,yAxis, colorId){
        this.ctx.fillStyle = COLOR_MAPPING[colorId] || COLOR_MAPPING[WHITE_COLOR_ID]
        this.ctx.fillRect(xAxis*BLOCK_SIZE, yAxis*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(xAxis*BLOCK_SIZE, yAxis*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
    }

    drawBoard(){
        for ( let row = 0; row < this.grid.length; row++){
            for ( let col = 0; col < this.grid[0].length; col++){
                this.drawCell(col,row,this.grid[row][col])
            }
        }
    }

    handleCompleteRows(){
        const latestGrid = board.grid.filter((row)=>{
            return row.some(col => col === WHITE_COLOR_ID)
        })

        const newScore = ROWS - latestGrid.length;
        const newRows = Array.from({length:newScore},()=> Array(COLS).fill(WHITE_COLOR_ID))
        if(newScore){

            board.grid = [...newRows,...latestGrid]
            this.handleScore(newScore*10)

            this.clearAudio.play()
        }
    }

    handleScore(newScore) {
        this.score += newScore
        document.getElementById('score').innerHTML = this.score
    }

    reset() {
        this.score = 0;
        this.grid = this.generateWhiteBoard()
        this.gameOver = false;
        this.drawBoard();
        this.bgm.play();
        this.bgm.loop = true;
        this.bgm.volume = 0.5
    }

}

export const board = new Board(ctx);
