function updateTime() {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/time");
    http.send();
    http.onload = () => {
        document.getElementById("time").innerHTML = (http.responseText - (http.responseText % 100)) / 100;
    };
}
const now = Date.now(); // Unix timestamp in milliseconds

document.getElementById("time").innerHTML = now;

setInterval(function() {
    updateTime();
  }, 1000);