if(process.argv.length !== 3){
  console.log('Not long enough')
  return
}
else{
  var num = parseInt(process.argv[2])
  var metric = process.argv[2].replace(parseInt(process.argv[2]).toString(),'')[0]

  if(metric=='m'){
    num = num*60
  }
  for(let i = 0; i < num; i++){
    setTimeout(function(){
      console.log(`Left: ${i}s`)
    },1000)
  }
}
