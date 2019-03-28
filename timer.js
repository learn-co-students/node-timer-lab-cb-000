var timegiven = process.argv[2] ;
var seconds ;
if (timegiven.endsWith('min')){
  seconds = parseInt(timegiven, 10) * 60
}
else {
 seconds = parseInt(timegiven, 10) ;
}

var timeleft = `Left: ${timegiven}` ;

function operate(){
  if (seconds === 0) {
    process.exit()
  }
  seconds -= 1 ;
  console.log(timeleft);
  timeleft = `Left: ${seconds}s` ;
}

global.setInterval(function(){
  if (seconds === 0) {
    console.log("Left: 0s")
    process.exit()
  }
  seconds -= 1 ;
  timeleft = `Left: ${seconds}s` ;
  console.log(timeleft);
}, 1000) ;
