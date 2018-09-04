let secondHand = document.getElementById('second-hand');
let minuteHand = document.getElementById('minute-hand');
let hourHand = document.getElementById('hour-hand');

function calculateDegree(timeParam) {
    return 360 / timeParam;
}

let secondHandDegree = calculateDegree(60);
let minuteHandDegree = calculateDegree(60);
let hourHandDegree = calculateDegree(12);

let now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();

function rotateHand(element,timeParam, degree) {
    let totalDegree = 270 + timeParam * degree;

    let rotate = element.setAttribute('style', `transform : rotate(${totalDegree}deg)`);

    return rotate;
}

setInterval(() => {
    rotateHand(secondHand, seconds, secondHandDegree);
    
    console.log("Seconds",seconds);

    return seconds++;
}, 1000);

// Calling For Minutes Initialization
rotateHand(minuteHand, minutes, minuteHandDegree);

setInterval(() => {
    if(seconds % 60 === 0) {
        minutes++;
    }
    rotateHand(minuteHand, minutes, minuteHandDegree);
    
    console.log("Minutes",minutes);
}, 1000);

// Initializing Hour Hand
rotateHand(hourHand, hours, hourHandDegree);

setInterval(() => {
    if(minutes % 60 === 0) {
        hours++;
    }
    rotateHand(hourHand, hours, hourHandDegree);
    
    console.log("Hours",hours);
}, 1000);


    
