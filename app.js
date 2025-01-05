// setTimeout(function(){
// console.log("Gaurav");
// },2000);

const sayGaurav = function(){
    console.log("Gaurav");
}
setTimeout(sayGaurav,2000);

 const changeText = document.querySelector('h1').innerHTML = "Best Js Series";
 const changeMe = setTimeout(changeText,2000);
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("Stopped");
});