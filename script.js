let level = 0;
let score = 0;
let time = 15;
let timer;

/* ---------- HIGH SCORE ---------- */
let highScore = localStorage.getItem("bugHighScore") || 0;

/* ---------- QUESTIONS (20) ---------- */
const q = [
{
code:`let arr = [1,2,3];
console.log(arr[3]);`,
options:["arr[3] → arr[2]","add element","remove array"],
correct:0,
explain:"Arrays start at index 0."
},
{
code:`let nums = [10,20,30];
for(let i=0;i<=nums.length;i++){
console.log(nums[i]);
}`,
options:["<= to <","remove loop","change array"],
correct:0,
explain:"<= causes undefined access."
},
{
code:`let a = [5,10,15];
a.push(20);
console.log(a);`,
options:["Correct","remove push","change index"],
correct:0,
explain:"push adds element."
},
{
code:`let arr = [1,2,3];
arr.pop();
console.log(arr);`,
options:["Correct","use push","remove array"],
correct:0,
explain:"pop removes last element."
},
{
code:`let arr = [];
arr[2]=50;
console.log(arr);`,
options:["use push","remove array","change index"],
correct:0,
explain:"push avoids empty slots."
}
];

/* ---------- LOAD ---------- */
function load(){

document.getElementById("codeBox").innerText =
q[level].code;

let box = document.getElementById("options");
box.innerHTML="";

q[level].options.forEach((op,i)=>{
box.innerHTML += `<button onclick="check(${i})">${op}</button>`;
});

document.getElementById("result").innerHTML="";

startTimer();

updateUI();
}

/* ---------- UI UPDATE ---------- */
function updateUI(){
document.getElementById("level").innerText = "Level " + (level+1);
document.getElementById("score").innerText = "Score: " + score;
document.getElementById("highScore").innerText = "High Score: " + highScore;
}

/* ---------- TIMER ---------- */
function startTimer(){

clearInterval(timer);
time = 15;

timer = setInterval(()=>{

time--;
document.getElementById("timer").innerText = "Time: " + time + "s";

if(time <= 0){
gameOver();
}

},1000);

}

/* ---------- CHECK ---------- */
function check(ans){

clearInterval(timer);

let data = q[level];

if(ans === data.correct){

score++;

if(score > highScore){
highScore = score;
localStorage.setItem("bugHighScore", highScore);
}

document.getElementById("result").innerHTML =
"🎉 Correct! " + data.explain;

winEffect();

setTimeout(()=>{

level++;

if(level >= q.length){
document.getElementById("codeBox").innerText =
"🏆 Game Completed! Score: " + score;
document.getElementById("options").innerHTML="";
return;
}

load();

},1200);

}else{

gameOver();
}

}

/* ---------- GAME OVER ---------- */
function gameOver(){

clearInterval(timer);

document.getElementById("result").innerHTML =
"💥 Game Over! Try Again";

loseEffect();

/* ONLY TRY AGAIN BUTTON (no next) */
document.getElementById("options").innerHTML = `
<button onclick="restartGame()">🔁 Try Again</button>
`;

}

/* ---------- RESTART ---------- */
function restartGame(){
level = 0;
score = 0;
time = 15;
load();
}

/* ---------- WIN EFFECT ---------- */
function winEffect(){

for(let i=0;i<15;i++){
let b = document.createElement("div");
b.innerHTML="🎈";
b.style.position="fixed";
b.style.left=Math.random()*100+"vw";
b.style.bottom="0px";
b.style.fontSize="25px";
document.body.appendChild(b);
setTimeout(()=>b.remove(),3000);
}

}

/* ---------- LOSE EFFECT ---------- */
function loseEffect(){

const e = ["💥","😂","🤣","💀","☠️","😭"];

for(let i=0;i<25;i++){
let x = document.createElement("div");
x.innerHTML = e[Math.floor(Math.random()*e.length)];
x.style.position="fixed";
x.style.left=Math.random()*100+"vw";
x.style.top=Math.random()*100+"vh";
x.style.fontSize="30px";
document.body.appendChild(x);
setTimeout(()=>x.remove(),2000);
}

}

/* ---------- START ---------- */
load();
