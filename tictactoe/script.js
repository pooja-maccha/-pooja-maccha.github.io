const gridsize = 3;
let markTile;
let clickNumber = 0;
let player = 1;
let tile


function initialize() {
    const container = document.getElementById('game-container');
    for (let i = 0; i < gridsize * gridsize; i++) {
        tile = document.createElement('div');
        tile.classList.add('tile');
        // tile.dataset.index= i;

        tile.className = "tile";

        tile.id = i.toString();
        tile.style.backgroundColor = 'gray';
        container.appendChild(tile);
        tile.addEventListener('click', addMark);
    }
}

function checkLine(row, playerID, rowBool) {
    let k = 3;
    if (rowBool) {
        k = 1
    }

    let box1 = document.getElementById(row).innerText;
    let box2 = document.getElementById((parseInt(row) + 1 * k).toString()).innerText;
    let box3 = document.getElementById((parseInt(row) + 2 * k).toString()).innerText;

    if (((box1 === box2) && (box2 === box3)) && (box1 === playerID)) {
        return true;
    }

    return false;

}


function checkDiag(playerID) {
    let box1 = document.getElementById('0').innerText;
    let box2 = document.getElementById('4').innerText;
    let box3 = document.getElementById('8').innerText;

    let box4 = document.getElementById('2').innerText;
    let box5 = document.getElementById('4').innerText;
    let box6 = document.getElementById('6').innerText;

    if ((((box1 === box2) && (box2 === box3)) && box1 === playerID) || (((box4 === box5) && (box5 === box6)) && box4 === playerID)) {
        return true;
    }

    return false;

}


function checkVictory(playerID) {
    if (checkDiag(playerID)) {
        return true;
    }

    for (let i = 0; i < 3; i++) {
        if (checkLine(i, playerID, false) || checkLine(i * 3, playerID, true)) {
            return true;
        }
    }

    return false;
}


function clearBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i.toString()).innerText = ''
    }
}

function addMark() {
    // if (markTile) {
    //     markTile.innerHTML = "";
    // }
    // let xmark=document.createElement('img');
    // let omark= document.createElement('img');
    // xmark.setAttribute('class','xmark');
    // xmark.src= "./x-mark.png";

    // omark.setAttribute('class','xmark');
    // omark.src= "./o-mark.png";

    let xmark = document.createElement('p');
    let omark = document.createElement('p');

    xmark.innerHTML = "X";
    omark.innerHTML = "O";
    //basketTile=this.id

    // markClass = document.getElementsByClassName("tile");

    markTile = document.getElementById(this.id);

    if (markTile.innerHTML == '') {
        if (player == 1) {
            markTile.appendChild(xmark);
            if (checkVictory("X")) {
                setTimeout(function () {
                    alert('Player 1 won')
                    clearBoard();
                    player = 2
                }, 0);
                // clearBoard();
            }


        }
        else {
            markTile.appendChild(omark);
            if (checkVictory("O")) {
                setTimeout(function () {
                    alert('Player 2 won')
                    clearBoard();
                    player = 2
                }, 0);
                //clearBoard();
            }
        }
    }

    document.getElementById("player").innerText = "" + player;
    if (player == 1)
        player = 2
    else
        player = 1
}



initialize()