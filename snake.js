import { getInputDirection } from "./input.js";
// import {stopGame} from './index.js';
let newSegments=0;
var score=0;
export var SNAKE_SPEED=8;
const snakeBody=[{x:11,y:11}];
import {scoreBoard,body,board} from './index.js'

var score=0;

export const stopGame=()=>{
    body.innerHTML=`<h1 class='gameover' onClick="window.location.reload()">GAME OVER!   <br/>Score : ${score}</h1> `;
}
export var update=()=>{
const inputDirection=getInputDirection();
    for(let i=snakeBody.length-2;i>=0;i--)
    {
        snakeBody[i+1]={...snakeBody[i]};
    }
     snakeBody[0].x+=inputDirection.x;
     snakeBody[0].y+=inputDirection.y;
}

export var draw=(board)=>{
snakeBody.forEach(segment=>{
const snakeElement=document.createElement('div');
snakeElement.style.gridRowStart=segment.y;
snakeElement.style.gridColumnStart=segment.x;
snakeElement.classList.add('snake');
board.appendChild(snakeElement);
// console.log(snakeElement);

})
// snakeBody[0].classList.add('round');
// snakeBody[snakeBody.length-1].classList.add('round');
}
export var expandSnake=(amount)=>{
    newSegments+=amount;
    score+=amount;
    scoreBoard.innerText=score;
    addSegments();
}
export var onSnake=(food)=>{
    return snakeBody.some(segment=>{
        return equalPos(segment,food);
    })
}
export var selfEat=()=>{
   var head=snakeBody[0];
    var status=false;
    for(var i=2;i<snakeBody.length;i++)
    {
        if(head.x===snakeBody[i].x&&head.y===snakeBody[i].y||checkHitBoundary())
         status=true;
    }
return status;
    
}
export function checkHitBoundary(){
    let head=snakeBody[0];
    if (head.x>21||head.x<1||head.y>21||head.y<1)
    return true;
    return false;
}
// export function containSnake(){
//     let head=snakeBody[0];
//     if(head.x>21)
    
//     if(head.x<0)
//     snakeBody[0].x=21;
//     if(head.y>21)
//     snakeBody[0].y=0;
//     if(head.y<0)
//     snakeBody[0].y=21;

    
// }
var equalPos=(pos1,pos2)=>{
    return pos1.x===pos2.x&&pos1.y===pos2.y;
}
var addSegments=()=>{
    for(let i=0;i<newSegments;i++)
    {
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegments=0;
}