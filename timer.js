process.argv.shift()
process.argv.shift()

var input = process.argv.shift()
if (input.includes("s")) {
    var inputNumber = parseInt(input.substring(0,input.indexOf("s")));
    var interval = global.setInterval(function(){
      if (inputNumber === 0) {
        global.clearInterval(interval)
        process.exit()
      }
      console.log("Left: "+(--inputNumber)+"s")
    },1000)
} else {
  var inputNumber = parseInt(input.substring(0,input.indexOf("m")));
  var numberOfSeconds = inputNumber * 60;
  var interval = global.setInterval(function(){
    if (numberOfSeconds === 0) {
      global.clearInterval(interval)
      process.exit()
    }
    numberOfSeconds--;
    if (numberOfSeconds < 60) {
      console.log("Left: "+(numberOfSeconds)+"s")
    } else {
      console.log("Left: "+Math.floor(numberOfSeconds/60)+"min "+
      	(numberOfSeconds%60)+"s")
    }
  },1000)
}
