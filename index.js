
const addhome = document.querySelector('.home-points-text');    
const addaway = document.querySelector('.home-points-text1');   
const Leader=document.getElementById('leader');

let homecount = 0;   
let awaycount = 0;   


function addthree() {
    homecount += 3;                     
    addhome.textContent = homecount;    
    Gameleader(); 
}

function addtwo() {
    homecount += 2;                      
    addhome.textContent = homecount; 
    Gameleader();    
}

function addone() {
    homecount += 1;
    addhome.textContent = homecount;
    Gameleader();
}


function addthreeGuest() {
    awaycount += 3;
    addaway.textContent = awaycount;
    Gameleader();
}

function addtwoGuest() {
    awaycount += 2;
    addaway.textContent = awaycount;
    Gameleader();
}

function addoneGuest() {
    awaycount += 1;
    addaway.textContent = awaycount;
    Gameleader();
}
function reset(){
    homecount=0;
    awaycount=0;
    addhome.textContent = 0;
    addaway.textContent = 0;
    Leader.textContent = "Game is tied";
}
function Gameleader() { 
if ( homecount>awaycount){
console.log("Home is leading")
Leader.textContent="Home is leading"
}
else if (homecount<awaycount){
console.log("Away is leading")
Leader.textContent="Away is leading"
}
else {  
    console.log("Game is tied");
    Leader.textContent = "Game is tied";
  }
}