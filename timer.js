const input = process.argv[2];
let time = input.match(/s/) ? parseInt(input[0]) - 1 : parseInt(input[0] * 60) - 1;

setInterval(() => {
  if (time > 0) {
    console.log(`Left: ${time}s`);
    time--
  } else {
    clearInterval();
    process.exit();
  }
}, 1000);
