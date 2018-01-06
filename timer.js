function timer(){
  let seconds, minutes;
  let [timeNum,units] = process.argv[2].split("");
   units === "s" ? seconds = timeNum : minutes = timeNum;
  seconds ? secondsTimer(seconds) : minutesTimer(minutes);

}

timer();


function secondsTimer(seconds){

  global.setInterval(function(){
    if(seconds === 0){
      console.log("Time is up!");
      global.clearInterval(this);
    }else{
      seconds--;
      console.log(`Left: ${seconds}s`);

    }


  }, 1000)
}

function minutesTimer(minutes){
    let min = minutes - 1;
    let seconds = 60;
    secondsTimer(seconds);
}
