let level = 0;
let time = 15;
let timer;

/* ---------- QUESTIONS (ARRAY BASED) ---------- */
const q = [
{
code:`let arr = [1,2,3];
console.log(arr[3]);`,

options:[
"Fix arr[3] → arr[2]",
"Add element",
"Remove array"
],

correct:0,
explain:"✔ Arrays start at index 0 so last index is 2"
},

{
code:`let nums = [10,20,30];
for(let i=0;i<=nums.length;i++){
console.log(nums[i]);
}`,

options:[
"Change <= to <",
"Remove loop",
"Change array"
],

correct:0,
explain:"✔ <= causes undefined access, use < nums.length"
},

{
code:`let a = [5,10,15];
a[1] = a[1] + 5;
console.log(a);`,

options:[
"Correct code",
"Change index",
"Remove array"
],

correct:0,
explain:"✔ index 1 is valid and updated properly"
}
];

/* ---------- LOAD QUESTION ---------- */
function load(){

document.getElementById("codeBox").innerText =
q[level].code;

let box = document.getElementById("options");
box.innerHTML="";

q[level].options.forEach((op,i)=>{
box.innerHTML += `
<button onclick="check(${i})">${op}</button>
`;
});

document.getElementById("result").innerHTML="";

startTimer();

}

/* ---------- TIMER ---------- */
function startTimer(){

clearInterval(timer);
time = 15;

timer = setInterval(()=>{

time--;

document.getElementById("level").innerText =
`Level ${level+1} | Time Left: ${time}s`;

if(time <= 0){
clearInterval(timer);
gameOver("⏰ Time Over! Game Lost!");
}

},1000);

}

/* ---------- CHECK ANSWER ---------- */
function check(ans){

clearInterval(timer);

let data = q[level];

if(ans === data.correct){

document.getElementById("result").innerHTML =
"🎉 Correct! " + data.explain;

winEffect();

setTimeout(()=>{

level++;

if(level >= q.length){
document.getElementById("codeBox").innerText =
"🏆 Game Completed! You learned arrays + debugging!";
document.getElementById("options").innerHTML="";
return;
}

load();

},1500);

}else{

gameOver("💥 Wrong Answer! Game Over!");
}

}

/* ---------- NEXT BUTTON (optional manual skip) ---------- */
function nextQ(){

level++;

if(level >= q.length){
document.getElementById("codeBox").innerText =
"🏆 Game Completed!";
document.getElementById("options").innerHTML="";
return;
}

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

/* ---------- GAME OVER ---------- */
function gameOver(msg){

clearInterval(timer);

document.getElementById("result").innerHTML = msg;

loseEffect();

document.getElementById("options").innerHTML="";

}

/* ---------- START GAME ---------- */
load();
