

const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const circle = document.querySelector("circle");




const primeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', primeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(totalDuration){
        console.log("timer started ?!!")
        duration = totalDuration;
    },
    onTick(timeReamaining){
        circle.setAttribute('stroke-dashoffset', 
            primeter * timeReamaining / duration - primeter
        );
        
    },
    onComplate(){
        console.log("complateeeeeeeeeeeee")
    }

})