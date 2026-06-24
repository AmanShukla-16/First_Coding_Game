let i = 0;

/* ---------- QUESTIONS ---------- */
const q = [
{
code: `let arr = [10,20,30];
console.log(arr[3]);`,

options:[
"Change arr[3] to arr[2]",
"Add arr.push(40)",
"Use loop instead"
],

correct:0,

explain:[
"✔ Correct: Arrays start at index 0 so last index is 2",
"❌ Wrong: Adding does not fix wrong index",
"❌ Wrong: Loop not needed for single value"
]
},

{
code: `let nums = [1,2,3];
for(let i=0;i<=nums.length;i++){
 console.log(nums[i]);
}`,

options:[
"Change <= to <",
"Remove loop",
"Change array"
],

correct:0,

explain:[
"✔ Correct: i < nums.length prevents undefined",
"❌ Wrong: Removing loop breaks logic",
"❌ Wrong: Array is fine"
]
},

{
code: `let a = [5,10,15];
a[1] = a[1] + 5;
console.log(a);`,

options:[
"Correct code",
"Change index",
"Remove array"
],

correct:0,

explain:[
"✔ Correct: index 1 is valid and updated properly",
"❌ Wrong: Changing breaks logic",
"❌ Wrong: Array is required"
]
}
];

/* ---------- LOAD QUESTION ---------- */
function load(){

document.getElementById("level").innerText =
"Level " + (i+1);

document.getElementById("codeBox").innerText =
q[i].code;

let box = document.getElementById("options");
box.innerHTML="";

q[i].options.forEach((op,index)=>{
    box.innerHTML += `
    <button onclick="check(${index})">${op}</button>
    `;
});

document.getElementById("result").innerHTML="";
}

/* ---------- CHECK ANSWER ---------- */
function check(ans){

let data = q[i];

if(ans === data.correct){
    document.getElementById("result").innerHTML =
    "🎉 Correct! " + data.explain[0];
}else{
    document.getElementById("result").innerHTML =
    "❌ Wrong! " + data.explain[ans];
}
}

/* ---------- NEXT QUESTION ---------- */
function nextQ(){

i++;

if(i >= q.length){
    document.getElementById("codeBox").innerText =
    "🏆 Game Finished! You learned debugging + arrays + loops.";

    document.getElementById("options").innerHTML="";
    return;
}

load();
}

/* start game */
load();
