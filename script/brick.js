import { 
    COLS,
    ROWS ,
    WHITE_COLOR_ID ,
    BRICK_LAYOUT,
    KEY_CODES
} from './config.js';

import { board } from './board.js';
export class Brick {

   constructor(id) {
    this.id = id;
    this.layout = BRICK_LAYOUT[id];
    this.activeIndex = 0;
    this.colPos = 3;
    this.rowPos = -2;
   }

   draw(){

    for (let row = 0 ; row < this.layout[this.activeIndex].length ; row++) {

        for (let col = 0 ; col < this.layout[this.activeIndex][0].length ; col++) {
            if(this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                board.drawCell(col + this.colPos,row + this.rowPos,this.id);
            }
        }
    }

   }

   clear(){
    for (let row = 0 ; row < this.layout[this.activeIndex].length ; row++) {

        for (let col = 0 ; col < this.layout[this.activeIndex][0].length ; col++) {
            if(this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID) {
                board.drawCell(col + this.colPos,row + this.rowPos,WHITE_COLOR_ID);
            }
        }
    }
   }

   moveLeft(){
    if (!this.checkCollision(this.rowPos, this.colPos - 1,this.layout[this.activeIndex])){

        this.clear();
        this.colPos--;
        this.draw();

    }
   }

   moveRight(){
    if (!this.checkCollision(this.rowPos, this.colPos + 1,this.layout[this.activeIndex])){

        this.clear();
        this.colPos++;
        this.draw();

    }
   }
   
   moveDown(){
    if (!this.checkCollision(this.rowPos + 1, this.colPos,this.layout[this.activeIndex])){

        this.clear();
        this.rowPos++;
        this.draw();

        return;
    }

    this.handleLanded();
    generateNewBrick()
   }

   rotate(){
    if (!this.checkCollision(this.rowPos, this.colPos,this.layout[(this.activeIndex + 1) % 4])){
        
        this.clear();
        this.activeIndex = (this.activeIndex + 1) % 4
        this.draw();

    }
   }

   checkCollision(nextRow, nextCol,nextLayout){

    for (let row = 0 ; row < nextLayout.length ; row++) {

        for (let col = 0 ; col < nextLayout[0].length ; col++) {

            if(nextLayout[row][col] !== WHITE_COLOR_ID && nextRow >= 0 ) {
               if(
                    (col + nextCol < 0) ||
                    (col + nextCol >= COLS) || 
                    (row + nextRow >= ROWS) ||
                    board.grid[row+nextRow][col+nextCol] !== WHITE_COLOR_ID

                ) return true;
            }
        }
    }

    return false;
   }

   handleLanded(){
        if(this.rowPos <= 0) {
            this.handleGameOver();
            return;
        }
        for (let row = 0 ; row < this.layout[this.activeIndex].length ; row++) {

            for (let col = 0 ; col < this.layout[this.activeIndex][0].length ; col++) {
                
                if(this.layout[this.activeIndex][row][col] !== WHITE_COLOR_ID){
                    board.grid[row + this.rowPos][col + this.colPos] = this.id;
                }

            }
        }

        board.handleCompleteRows();
        board.drawBoard();

    }

    handleGameOver() {
        board.bgm.pause();
        board.gameOver = true;
        board.isPlaying = false;
        board.successAudio.play();
        
    }

}

var brick;

function generateNewBrick(){
    brick = new Brick(Math.floor(Math.random() * 7))
}  

document.querySelector('.play-btn').addEventListener('click', ()=>{
    board.reset();
    board.isPlaying = true;
    generateNewBrick();

    const refresh = setInterval(()=>{
        if(!board.gameOver){
            brick.moveDown(); 
        } else {
            clearInterval(refresh)
        }
        
    },500)
})


document.addEventListener('keydown',(e) => {
    if(!board.gameOver && board.isPlaying){
        board.moveAudio.play();
        switch (e.code) {
            case KEY_CODES.LEFT : 
                brick.moveLeft();
                break;
            case KEY_CODES.RIGHT : 
                brick.moveRight();
                break;
            case KEY_CODES.DOWN :
                brick.moveDown();
                break;
            case KEY_CODES.UP :
                brick.rotate();
                break; 
        }

    }
});