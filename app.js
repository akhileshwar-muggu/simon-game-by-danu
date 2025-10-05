let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2");

let btns=["red","blue","green","yellow"];

let started=false;
let level=0;

document.addEventListener("keypress", ()=>{
    if(started==false){
        // console.log("game staretd");
        started=true;
    }
    levelup();
})

function btnFlash(b){
    b.classList.add("flash");
    setTimeout(function(){b.classList.remove("flash");},150)
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    console.log(gameseq)
    btnFlash(randBtn);

}

function checkAns(idx){
    
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,700)
        }
    }else{
        h2.innerHTML=`Game over! your score was ${level-1} <br> press any key to play again`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 300);
        
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}