// setInterval(function(){
//     console.log("Gaurav",Date.now());
// },1000);

// const sayDate = function(str){
//     console.log(str,Date.now());
// }
// const intervalid = setInterval(sayDate,1000,"hi");

// clearInterval(intervalid);

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let intervalid;

start.addEventListener('click',function(){
    if(!intervalid){
        intervalid = setInterval(()=> {
            console.log("hi",Date.now());
        },1000)
    }
});
stop.addEventListener('click',function(){
    if(intervalid){
        clearInterval(intervalid);
        intervalid = null;
    }
});







