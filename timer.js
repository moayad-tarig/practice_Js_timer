class Timer {
 
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplate = callbacks.onComplate;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click',this.pause)
    }
    
    start = () => {
        if(this.onStart){
            this.onStart(this.timeReamaining);
        }
        this.tick();
        this.interval = setInterval(this.tick , 20);
    }
    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {

        if(this.timeReamaining <= 0){
            this.pause();
            if(this.onComplate){
                this.onComplate();
            }
        }else {
            this.timeReamaining = this.timeReamaining - 0.02; 
            if(this.onTick){
                this.onTick(this.timeReamaining);
            }

        }
        }
        get timeReamaining(){
           return parseFloat(this.durationInput.value)
        }
        set timeReamaining(time){
            durationInput.value = time.toFixed(2);
        }
}