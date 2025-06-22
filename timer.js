const START=document.getElementById("start");
const FINISH=document.getElementById("finish");
const RESET=document.getElementById("reset");
let hour=0;
let min=0;
let sec=0;
let count=0;
let isListener=false;
let timerID=null;

START.addEventListener("click",()=>{
    if (isListener){
        return ;
    }
    isListener=true;
    value=true;
    final()
})

FINISH.addEventListener("click",()=>{
    value=false;
    isListener=false;
    clearTimeout(timerID);
})

RESET.addEventListener("click",()=>{
    value=false;
    hour=0;
    min=0
    sec=0;
    count=0;
    const a=document.getElementById("hour").innerHTML="00";
    const b=document.getElementById("min").innerHTML="00";
    const c=document.getElementById("sec").innerHTML="00";
    const d=document.getElementById("count").innerHTML="00";
    isListener=false;
    clearTimeout(timerID);
    
})

function final(){
    if (value==true){
        count++ 

        if(count==100){
            sec++
            count=0;

        }
        if(sec==60){
            min++
            sec=0;
            count=0;
        }
        if(min==60){
            hr++
            min=0;
            sec=0;
            count=0;
        }
    }
    let hrstr=hour;
    let minstr=min;
    let secstr=sec;
    let countstr=count;
    if(hour<10){
        hrstr="0"+hrstr;
    }
    if(min<10){
        minstr="0"+minstr;
    }
    if(secstr<10){
        secstr="0"+secstr;
    }
    if(countstr<10){
        secstr="0"+secstr;
    }
    document.getElementById("hour").innerHTML=hrstr;
    document.getElementById("min").innerHTML=minstr;
    document.getElementById("sec").innerHTML=secstr;
    document.getElementById("count").innerHTML=countstr;
timerID=setTimeout(final,10);

}

