
const textDisplay =
document.getElementById("textDisplay");


const inputText =
document.getElementById("inputText");


const startBtn =
document.getElementById("startBtn");


const restartBtn =
document.getElementById("restartBtn");


const timeDisplay =
document.getElementById("time");


const wpmDisplay =
document.getElementById("wpm");


const accuracyDisplay =
document.getElementById("accuracy");


const mistakesDisplay =
document.getElementById("mistakes");



let time = 60;

let timer = null;

let started = false;


let text =
"The quick brown fox jumps over the lazy dog.";



function startTest(){


    if(started)
    return;


    started=true;


    inputText.disabled=false;

    inputText.focus();



    timer=setInterval(()=>{


        time--;

        timeDisplay.innerText=time;


        calculate();


        if(time<=0){

            clearInterval(timer);

            inputText.disabled=true;

            alert("Test Complete!");

        }


    },1000);


}




function calculate(){


let typed=inputText.value;


let correct=0;

let mistakes=0;



for(let i=0;i<typed.length;i++){


    if(typed[i]===text[i]){

        correct++;

    }

    else{

        mistakes++;

    }

}



let accuracy=0;


if(typed.length>0){

accuracy=
Math.round(
(correct/typed.length)*100
);

}



let words=
typed.trim().split(" ").length;



let wpm=
Math.round(
(words/(60-time))*60
);



if(time===60){

wpm=0;

}



wpmDisplay.innerText=wpm;

accuracyDisplay.innerText=
accuracy+"%";


mistakesDisplay.innerText=
mistakes;



}



function restart(){


location.reload();


}



startBtn.addEventListener(
"click",
startTest
);



restartBtn.addEventListener(
"click",
restart
);



inputText.addEventListener(
"input",
calculate
);
