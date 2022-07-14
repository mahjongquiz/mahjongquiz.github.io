
const b1w1 = document.querySelectorAll(".wrongb")[0]
const b1w2 = document.querySelectorAll(".wrongb")[1]
const b1r = document.querySelectorAll(".rightb")[0]

const b2w1 = document.querySelectorAll(".wrongb")[0]
const b2r = document.querySelectorAll(".rightb")[0]


const q1w1 = document.querySelectorAll(".wrong")[0];
const q1w2 = document.querySelectorAll(".wrong")[1];
const q1r = document.querySelectorAll(".right")[0];

const q2r = document.querySelectorAll(".right2")[0];
const q2w1 = document.querySelectorAll(".wrong2")[0];
const explanation = document.getElementById("ex");

function right(button, pic) {
        pic.src ="right.png";
        
    }
    

function wrong(button, pic) {
    pic.src ="wrong.png";
 }

 function explain() {
     explanation.style.display="block";
 }
