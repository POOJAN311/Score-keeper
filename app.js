const displayp1 = document.querySelector('#displayply1');
const displayp2 = document.querySelector('#displayply2');
const button1 = document.querySelector('#scoreply1');
const button2 = document.querySelector('#scoreply2');
const reset = document.querySelector('#reset');
const Playto = document.querySelector('#playto');

var p1score = 0;
var p2score = 0;
var Gameover = false;
let winningscore = 3;

button1.addEventListener('click', function (e) {
    if (!Gameover) {
        p1score += 1;
        if (p1score === winningscore) {
            Gameover = true;
            displayp1.classList.add("winner");
            displayp2.classList.add("loser");
            button1.disabled = true;
            button2.disabled = true;
        }
        displayp1.textContent = p1score;
    }
})
button2.addEventListener('click', function (e) {
    if (!Gameover) {
        p2score += 1;
        if (p2score === winningscore) {
            Gameover = true;
            displayp2.classList.add("winner");
            displayp1.classList.add("loser");
            button1.disabled = true;
            button2.disabled = true;
        }
        displayp2.textContent = p2score;
    }
})

Playto.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    Reset();
})

reset.addEventListener('click', Reset)

function Reset() {
    Gameover = false;
    p1score = 0;
    p2score = 0;
    displayp1.textContent = p1score;
    displayp2.textContent = p2score;
    displayp1.classList.remove("winner", "loser");
    displayp2.classList.remove("winner", "loser");
    button1.disabled = false;
    button2.disabled = false;
}