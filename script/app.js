import { 
    COLS,
    ROWS ,
    BLOCK_SIZE ,
    ctx,
} from './config.js';

import { board } from './board.js'

import { Brick } from './brick.js';

(()=>{

    ctx.canvas.width = COLS * BLOCK_SIZE;
    ctx.canvas.height = ROWS * BLOCK_SIZE;

    board.drawBoard();

    //////////////////////////
    

    return console.log('code with lucy');
})()