let hourHand=document.querySelector('.hour-hand');
let minuteHand=document.querySelector('.minute-hand');
let secondHand=document.querySelector('.second-hand');

let timeIntervalFunc= setInterval(rotateHands,1000);

function rotateHands()
{
    const currentDateAndTime= new Date();

    const numOfSecs=currentDateAndTime.getSeconds();
    const numOfMins=currentDateAndTime.getMinutes();
    const numOfHrs=currentDateAndTime.getHours();

    //for seconds hand, 1sec = 6deg
    secondHand.style.rotate=numOfSecs*6+'deg';

    //for minutes hand, (1min = 6deg + for everySecond 1sec=0.1deg)
    minuteHand.style.rotate=((numOfMins*6)+(numOfSecs*0.1))+'deg';
    
    //for hours hand, (1hr=30deg+forEachMinute 1min=0.5deg)
    hourHand.style.rotate=((numOfHrs*30)+(numOfMins*0.5))+'deg';
    
}

// calling this method to set the clock right when the tha page is loaded
//(without delaying it for the 1000 millisecs as specified in the setInterval)
rotateHands();
