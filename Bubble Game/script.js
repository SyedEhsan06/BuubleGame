var score = 0;
var findrn = 0;
var time = 60;

function bubbleMain() {
  var bubbleDOM = "";

  for (let i = 0; i < 150; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    bubbleDOM += `<div class="roundBubble" id="bubbleID">${randomNumber}</div>`;
  }
  document.querySelector(".panelBottom").innerHTML = bubbleDOM;
}

function runTimer() {
  var Timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerID").textContent = time;
    
    } else {
        
      clearInterval(Timer);
      if(Number(score)<=50){
        document.querySelector(".panelBottom").innerHTML = `<h1>Chal Nikal Noobde<h1>`;
    }
    else if(Number(score)>=300){
        document.querySelector(".panelBottom").innerHTML = `<h1>You Are Goat Bruh<h1>`;

    }
    else{
        document.querySelector(".panelBottom").innerHTML = `<h1>Game Over,Well Played<h1>`;

    }
    }
  }, 1000);
}
function NewFind() {
  findrn = Math.floor(Math.random() * 10);
  document.querySelector("#findval").textContent = findrn;
}
function scoreFunc() {
  score += 10;
  document.querySelector("#pointval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", (details) => {
  var target = Number(details.target.textContent);
  console.log(target, typeof target);
  if (target === findrn) {
    scoreFunc();
    NewFind();
    bubbleMain();
  } else {
    score -= 10;
    NewFind();
  }
});

NewFind();
runTimer();
bubbleMain();
// main()
// scoreFunc()
