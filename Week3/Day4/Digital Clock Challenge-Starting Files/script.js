//Hints
//function setTime() {

let time = document.getElementById("time");

function setTime() {

    const clock = new Date();
    let hours = clock.getHours();
    let mins = clock.getMinutes();
    let secs = clock.getSeconds();
    time.innerHTML = hours + " " + mins + " " + secs;
    setInterval(setTime, 1000);
}


setTime();


//}
//setTime();
//