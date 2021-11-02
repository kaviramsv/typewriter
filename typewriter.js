const sentence = "hello there from lighthouse labs";
let timer = 0;

function animation() {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char)
    }, (timer));
    timer += 100;
  }
  setTimeout(() => {
    console.log("")
  }, (timer));
}
animation();

