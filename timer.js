var argv = process.argv[2];
var count = 0;

if (!argv) {
  console.log("Please enter valid argument")
  process.exit(1)
} else if (argv.indexOf('s') > -1) {
  count = parseInt(argv.slice(0, -1), 10)
} else if (argv.indexOf('min') > -1) {
  count = parseInt(argv.slice(0, -3), 10) * 60
} else {
  console.log("Please enter a valid time interval. e.g. s for seconds")
  process.exit(1)
}

var interval = setInterval(function() {
    count--
    console.log(`Left: ${count}s`)
    if (count == 0) {
      clearInterval(interval)
      process.exit(0)
    }
}, 1000)


