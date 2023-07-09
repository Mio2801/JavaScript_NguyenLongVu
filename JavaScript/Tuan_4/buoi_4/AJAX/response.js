"use strict";
/*
const http = new XMLHttpRequest();
http.onload = ()=> {
    document.querySelector("#main").innerHTML = this.getAllResponseHeaders();
}
http.open("GET", "ajax_info.txt");
http.send();

*/
const http = new XMLHttpRequest();
http.onload = ()=> {
    document.querySelector("#main").innerHTML = this.getResponseHeaders("Last-Modified");
}
http.open("GET", "ajax_info.txt");
http.send();













