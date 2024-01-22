let eggTile;
let basketTile;
let score=0;
let eggsThrown = 0;
let maxEggs = 20;

window.onload= function(){
    setGame();
}

function setGame()
{
    for(let i=0;i<25;i++)
    {
        let tile=document.createElement("div");
        tile.id=i.toString();
        // tile.onClick=getId(this.id);    
        document.getElementById("container").appendChild(tile);
        tile.addEventListener("click",placeBasket);
    }
    setInterval(throwEgg, 1500);
}

function getRandomEgg()
{
    let num= Math.floor(Math.random()*25);
    return num.toString();
}

function throwEgg(){

    if (eggsThrown < maxEggs) {
        if (eggTile) {
            eggTile.innerHTML = '';
        }

    let egg=document.createElement('img');
    egg.src="./egg.png";

    let num=getRandomEgg()
    eggTile=document.getElementById(num);
    egg.setAttribute('class','egg');
    eggTile.appendChild(egg);
    eggsThrown++;
    } else {
    // Game Over Condition
    alert("Game Over! Your score is: " + score);
    resetGame();    
    }
}

function placeBasket()
{
   
    if (basketTile) {
        basketTile.innerHTML = "";
    }
    let basket=document.createElement('img')
    basket.setAttribute('class','basket');
    basket.src= "./basket.png";
    //basketTile=this.id
    basketTile=document.getElementById(this.id);
    basketTile.appendChild(basket);
    // basket.setAttribute('id',basketTile.toString());
    if(basketTile.id==eggTile.id)
    {
        score+=10;
        document.getElementById("score").innerText = "Score: " + score; // Update the score display

    }
    if(basketTile.img)
    {
        basketTile.innerHTML="";
    }
}


function resetGame() {
    score = 0;
    eggsThrown = 0;
    document.getElementById("score").innerText = "Score: " + score;
}
