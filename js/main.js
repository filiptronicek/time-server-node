function updateTime() {
    const http = new XMLHttpRequest();

    http.open("GET", "./api/");
    http.send();
    http.onload = () => {
        document.getElementById("time").innerHTML = (http.responseText - (http.responseText % 1000)) / 1000;
        let epoch = new Date().valueOf(); // Unix timestamp in milliseconds
        //epoch = (epoch / 1000).toFixed(0);
        document.getElementById("comp_time").innerHTML = (epoch / 1000).toFixed();
        console.log("Server time: " + (http.responseText) );
        console.log("Local time: " + epoch );
    };

}


setInterval(function() {
    updateTime();
  }, 1000);
updateTime();
