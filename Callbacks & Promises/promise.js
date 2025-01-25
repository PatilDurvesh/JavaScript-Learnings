console.log("this is promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Random Number Not supporting");
  } 
  else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("durvesh");
    }, 3000);
  }
})
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Random Number Not supporting 2");
  } 
  else {
    setTimeout(() => {
      console.log("yes i am done 2");
      resolve("durvesh 2");
    }, 1000);
  }
})

let p3 = Promise.all([prom1, prom2 ])
p3.then((a) =>{
    console.log(a);
}).catch(err=>{
    console.log(err);   
})


let p4 = Promise.race([prom1, prom2 ])
p3.then((a) =>{
    console.log(a);
}).catch(err=>{
    console.log(err);   
})