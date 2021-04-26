class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.timeSet = {
            selector: this.timerId = document.querySelector(selector),
            targetDate: this.targetDate = targetDate,
            days: this.days = document.querySelector(`${selector} [data-value="days"]`),
            hours: this.hours = document.querySelector(`${selector} [data-value="hours"]`),
            minutes: this.minutes = document.querySelector(`${selector} [data-value="mins"]`),
            seconds: this.seconds = document.querySelector(`${selector} [data-value="secs"]`),
        }
    }

    init() {
        const time = this.getTimeComponents(0);
        this.updateClockFace(time);
    }

    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);          
        }, 1000);
    }

    getTimeComponents(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }

    updateClockFace({ days, hours, mins, secs }) {
        this.timerId.textContent = `${days}:${hours}:${mins}:${secs}`;
    }
};

const timer = new CountdownTimer ({
      selector: '#timer-1',
      targetDate: new Date('Jan 1, 2021'),
});
    
timer.start();
