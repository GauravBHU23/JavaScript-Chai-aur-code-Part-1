const xhr = new XMLHttpRequest();
const requestUrl = "https://api.github.com/users/GauravBhu23";
xhr.open("GET", requestUrl);
//console.log("here");

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.avatar_url);
    const btn = document.querySelector(".btn");
    const btn2 = document.querySelector(".btn2");
    const btn3 = document.querySelector(".btn3");
    


    btn.addEventListener("click", function (e) {
      e.preventDefault();
      btn.innerHTML = `Follower : <span>${data.followers}<span>`;
    });



    btn2.addEventListener("click", function (e) {
        e.preventDefault();
      btn2.innerHTML = `Following : <span>${data.following}<span>`;
    });

    btn3.addEventListener("click", function (e) {
        e.preventDefault();
        btn3.innerHTML = `Image Link  : <span>${data.avatar_url}<span>`;
      });


  }
};
console.log(xhr.readyState);
xhr.send();
