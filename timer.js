function timeType(){
  let time = process.argv[2].split("");
  var type = time[1];
  var num = parseInt(time[0]);
  type === "s" ? timer(num) : timer(num*60);
}

function timer(seconds){
  global.setInterval(function() {
    if(seconds === 0) {
      global.clearInterval(this);
    }
    else {
      seconds--;
      console.log(`Left: ${seconds}s`);
    }
  }, 1000)
}

timeType();
