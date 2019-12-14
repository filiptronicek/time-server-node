function updateTime() {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/time");
    http.send();
    http.onload = () => {
        document.getElementById("time").innerHTML = (http.responseText - (http.responseText % 1000)) / 1000;
        let epoch = new Date().getTime(); // Unix timestamp in milliseconds
        epoch = epoch.toFixed(0);
        document.getElementById("comp_time").innerHTML = epoch;
    };

}


setInterval(function() {
    updateTime();
  }, 1000);