let level = 0;
let score = 0;
let time = 15;
let timer;

/* ---------- 20 QUESTIONS ---------- */
const q = [
{
code:`let arr = [1,2,3];
console.log(arr[3]);`,
options:["arr[3] → arr[2]","add element","remove array"],
correct:0,
explain:"Arrays start at index 0, last index is 2."
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
explain:"push adds element at end."
},
{
code:`let arr = [1,2,3];
arr[1] = arr[1] + 10;
console.log(arr);`,
options:["Correct","change index","remove array"],
correct:0,
explain:"Valid index update."
},
{
code:`let arr = [];
arr[2] = 50;
console.log(arr);`,
options:["use push(50)","remove array","change index"],
correct:0,
explain:"push avoids empty slots."
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
code:`let arr = [1,2,3];
arr.shift();
console.log(arr);`,
options:["Correct","use push","change index"],
correct:0,
explain:"shift removes first element."
},
{
code:`let arr = [1,2,3];
arr.unshift(0);
console.log(arr);`,
options:["Correct","use pop","remove array"],
correct:0,
explain:"unshift adds at start."
},
{
code:`let arr = [1,2,3];
console.log(arr.includes(2));`,
options:["Correct","false","error"],
correct:0,
explain:"includes checks value."
},
{
code:`let arr = [1,2,3];
console.log(arr.indexOf(2));`,
options:["1","2","0"],
correct:0,
explain:"indexOf returns position."
},
{
code:`let arr = [1,2,3];
arr.splice(1,1);
console.log(arr);`,
options:["Correct","use pop","change index"],
correct:0,
explain:"splice removes element."
},
{
code:`let arr = [1,2,3];
console.log(arr.join("-"));`,
options:["Correct","use push","remove array"],
correct:0,
explain:"join converts array to string."
},
{
code:`let arr = [1,2,3];
console.log(arr.length);`,
options:["Correct","-1","remove array"],
correct:0,
explain:"length gives total elements."
},
{
code:`let arr = [1,2,3];
for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}`,
options:["Correct","<= change","remove loop"],
correct:0,
explain:"Proper loop."
},
{
code:`let arr = [1,2,3];
console.log(arr[-1]);`,
options:["undefined","3","0"],
correct:0,
explain:"Negative index invalid."
},
{
code:`let arr = [1,2,3];
arr[10]=5;
console.log(arr.length);`,
options:["11","3","10"],
correct:0,
explain:"JS expands array."
},
{
code:`let arr = [1,2,3];
console.log(arr[0]+arr[2]);`,
options:["Correct","change index","remove"],
correct:0,
explain:"Valid index addition."
},
{
code:`let arr = [1,2,3];
arr[1]=99;
console.log(arr);`,
options:["Correct","remove array","change loop"],
correct:0,
explain:"Direct update works."
},
{
code:`let arr = [1,2,3];
console.log(arr.reverse());`,
options:["Correct","remove array","error"],
correct:0,
explain:"reverse changes order."
},
{
code:`let arr = [1,2,3];
console.log(arr.slice(1));`,
options:["Correct","splice","remove array"],
correct:0,
explain:"slice returns part of array."
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

document.getElementById("level").innerText = "Level " + (level+1);
document.getElementById("score").innerText = "Score: " + score;

}

/* ---------- TIMER ---------- */
function startTimer(){

clearInterval(timer);
time = 15;

timer = setInterval(()=>{

time--;
document.getElementById("timer").innerText = "Time: " + time + "s";

if(time <= 0){
gameOver("⏰ Time Over!");
}

},1000);

}

/* ---------- CHECK ---------- */
function check(ans){

clearInterval(timer);

let data = q[level];

if(ans === data.correct){

score++;

document.getElementById("result").innerHTML =
"🎉 Correct! " + data.explain;

winEffect();

setTimeout(()=>{

level++;

if(level >= q.length){
document.getElementById("codeBox").innerText =
"🏆 Game Completed! Final Score: " + score;
document.getElementById("options").innerHTML="";
return;
}

load();

},1200);

}else{

gameOver("💥 Wrong Answer!");
}

}

/* ---------- NEXT ---------- */
function nextQ(){

level++;

if(level >= q.length){
document.getElementById("codeBox").innerText =
"🏆 Finished!";
document.getElementById("options").innerHTML="";
return;
}

load();

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

/* ---------- GAME OVER ---------- */
function gameOver(msg){

clearInterval(timer);

document.getElementById("result").innerHTML = msg;

loseEffect();

document.getElementById("options").innerHTML = `
<button onclick="restartGame()">🔁 Try Again</button>
`;

}

/* ---------- START GAME ---------- */
load();
