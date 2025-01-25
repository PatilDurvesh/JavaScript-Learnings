console.log("Durvesh is a hacker");
console.log("Harshal is a hecker");

setTimeout(() => {
  console.log("I am inside");
}, 0);
setTimeout(() => {
  console.log("I am inside 2");
}, 4000);

console.log("The End");

const fn = () => {
  console.log("nothing")
}


const callback = (arg, fn) => {
  console.log(arg)
  fn()
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Durvesh", fn);
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)