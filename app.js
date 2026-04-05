let userTrack=[];
let compTrack=[];
let btncolor=["red","yellow","green","purple"];
let start=false;
let level=0;
let highest_score=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelup();
    }
});
function keyflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("press");
    setTimeout(function(){
        btn.classList.remove("press");
    },50);
}
function levelup(){
    userTrack=[];
    level++;
    if(highest_score<level){
        highest_score=level;
    }
    h2.innerText=`Level:${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btncolor[randidx];
    console.log(randcolor);
    let btn=document.querySelector(`.${randcolor}`);
    compTrack.push(randcolor);
    keyflash(btn);
}
function checkans(idx){
    console.log("userTrack");
    console.log("compTrack");
    if(userTrack[idx]==compTrack[idx]){
        if(userTrack.length==compTrack.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over!! Press Any Key To Restart<br>Your Score Was:${level-1}<br> Highest Score was:${highest_score-1}`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },50);
        resetGame();
    }
}
function userpress(btn){
    userflash(this);
    userTrack.push(this.id);
    checkans(userTrack.length-1);
    console.log(userTrack);
}
let btns=document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener("click",userpress);
}
function resetGame(){
    start=false;
    userTrack=[];
    compTrack=[];
    level=0;   
}