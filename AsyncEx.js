console.log("Start exe...")
console.log("Logic exe...")
console.log("end exe...")

//async
console.log("Start exe...")

setTimeout(()=>{
  console.log("Logic exe...")
},2000)

console.log("end exe...")

//async drawback
let a =10,b=0;

setTimeout(()=>{
  a=20;
},2000)

console.log(a+b)