


function attachEventListeners(){let count = 0;
document.getElementById('ClickMe')
.addEventListener('click',function(xyz){
console.log("Program Executed", count++)
});
}
attachEventListeners();