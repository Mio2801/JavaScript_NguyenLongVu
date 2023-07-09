"use strict";
/*
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "demo_get.asp");
  xhttp.send();
}
*/
// post
let loadDoc = ()=> {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        document.querySelector("#demo").innerHTML = this.requestAnimationFrame();
    }
    xhttp.open("POST","demo_post2.asp");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");
}







