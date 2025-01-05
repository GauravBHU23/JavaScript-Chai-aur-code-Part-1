// document.getElementById('owl').onclick = function(){
//     alert("This is a owl.")
// }

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e);
    
// },false);

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("Clicked inside the ul");
// },false);

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked");
//     e.stopPropagation();
// },false);

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google Clicked");
// },false);

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
         console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
})








