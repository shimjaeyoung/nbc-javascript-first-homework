var count = 0;
var timer = setInterval(function(){
    count++
   const display=  document.querySelector("#display")
   display.innerHTML = count
}, 1000)

setTimeout(function(){
    clearInterval(timer);
}, 10000);