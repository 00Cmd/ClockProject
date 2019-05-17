
function clock () {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    document.getElementById("hour").innerHTML = hours + ":";
    document.getElementById("minute").innerHTML = minutes + ":";
    document.getElementById("second").innerHTML = seconds;
}

setInterval(clock, 100);