
import {SNAKE_SPEED,update as updateSnake, draw as drawSnake} from './snake.js';
let lastRenderTime=0;
import {update as updateFood, draw as drawFood} from './food.js';
export const body=document.querySelector('body');
export const board=document.querySelector('.board');
export var scoreBoard=document.querySelector('.score');
import {stopGame, selfEat,checkHitBoundary} from './snake.js';



const gameLoop=(currentTime)=>{
  
  
    if(selfEat())
    
        // for(var i=0;i<2000;i++)
        // for(var j=0;j<2000;j++)
        // {}
     stopGame();
    
    else
    window.requestAnimationFrame(gameLoop);
    // if(checkHitBoundary())
    // {
    //   containSnake();
    // }
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
  if(secondsSinceLastRender<1/SNAKE_SPEED)return;
  
  lastRenderTime=currentTime;

updateGame();
drawGame();






//    console.log('render');
}
window.requestAnimationFrame(gameLoop);

const drawGame=()=>{
    drawSnake(board);
    drawFood(board);

}
const updateGame=()=>{
    board.innerHTML='';
    updateSnake();
    updateFood();
}
