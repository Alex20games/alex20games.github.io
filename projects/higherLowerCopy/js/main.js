let txtWin = document.querySelector(".winner");
let txtnb1 = document.querySelector(".numberOne");
let txtnb2 = document.querySelector(".numberTwo");
let btnHigher = document.querySelector(".higher");
let btnLower = document.querySelector(".lower");
let btnstart = document.querySelector(".start");
let txtcm = document.querySelector(".computer");
btnHigher.disabled = true;
btnLower.disabled = true;

btnstart.addEventListener("click", startG);
function startG() {
    btnHigher.disabled = false;
    btnLower.disabled = false;
    btnstart.disabled = true;
    numb1 = Math.floor(Math.random() * 12) + 1;
    numb2 = Math.floor(Math.random() * 12) + 1;

    txtnb2.textContent = numb2

    btnHigher.addEventListener("click", hChoice);
    btnLower.addEventListener("click", lChoice);
}

function hChoice() {
    btnHigher.disabled = true;
    btnLower.disabled = true;
    btnstart.disabled = false;

    if (numb1 > numb2) {
        txtWin.textContent = "You won!!";
        txtnb1.textContent = numb1;
    } else if (numb1 == numb2) {
        txtWin.textContent = "Draw!!";
        txtnb1.textContent = numb1;
    } else {
        txtWin.textContent = "you lost!!";
        txtnb1.textContent = numb1;
    }
}

function lChoice() {
    btnHigher.disabled = true;
    btnLower.disabled = true;
    btnstart.disabled = false;

    if (numb1 < numb2) {
        txtWin.textContent = "You won!!";
        txtnb1.textContent = numb1;
    } else if (numb1 == numb2) {
        txtWin.textContent = "Draw!!";
        txtnb1.textContent = numb1;
    } else {
        txtWin.textContent = "you lost!!";
        txtnb1.textContent = numb1;
    }
}

function restart() {
    startG()
}


