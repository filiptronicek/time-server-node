function updateTime() {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/time");
    http.send();
    http.onload = () => {
        document.getElementById("time").innerHTML = (http.responseText - (http.responseText % 1000)) / 1000;
    };
}
const now = Date.now - (Date.now() % 1000) / 1000; // Unix timestamp in milliseconds

document.getElementById("time").innerHTML = now;

setInterval(function() {
    updateTime();
  }, 1000);