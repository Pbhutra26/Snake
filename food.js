import {onSnake, expandSnake} from './snake.js'
let food=getRandomFoodPosition();
const EXPANSION_RATE=1;
export var update=()=>{
   if(onSnake(food)){
      //  console.log('onsnake')
       expandSnake(EXPANSION_RATE);
       food=getRandomFoodPosition();
   }
    }
    export var draw=(board)=>{
   
    const foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
    
    }
    function getRandomFoodPosition(){
        let newFoodPosition;
        while(newFoodPosition==null || onSnake(newFoodPosition))
      newFoodPosition= {x:1+Math.floor(Math.random()*21),y:Math.floor(1+Math.random()*21)};

      return newFoodPosition;
    }
    