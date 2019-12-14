function updateTime() {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/time");
    http.send();
    http.onload = () => {
        document.getElementById("time").innerHTML = http.responseText;
    };
}

document.getElementById("time").innerHTML = new Date();

setInterval(function() {
    updateTime();
  }, 500);