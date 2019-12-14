function updateTime() {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/time");
    http.send();
    http.onload = () => {
        document.getElementById("time").innerHTML = (http.responseText - (http.responseText % 1000)) / 1000;
    };
    const now = Date.now; // Unix timestamp in milliseconds

    document.getElementById("comp_time").innerHTML = now;
}


setInterval(function() {
    updateTime();
  }, 1000);