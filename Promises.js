
// promises->
// :reject
// :resolve
// :pending

function func1(){
return new Promise(function(resolve,reject){
  setTimeout(()=> {
    const error = true;
    if(!error){
      console.log("The promise has been resolved")
       resolve();
    }
    else {
      console.log("The promise has not been resolved")
      reject();
    }
  },2000)
})
}

func1().then(function(){
  console.log("Thanks for resolving")
}).catch(function(error){
  console.log("Very Bad Bro. Reason" + error)
})
