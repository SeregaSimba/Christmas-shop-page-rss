class DateNewYar {
  constructor() {
    this.newYar = new Date(new Date().getFullYear() + 1, 0, 1);
    this.intervalId = null;
  }

  _updateTime() {
    this._now = new Date();
    this._diff = this.newYar - this._now;
    if (this._diff < 0) this._diff = 0;
  }

  getDay() {
    const day = Math.floor(this._diff / (1000 * 60 * 60 * 24));
    return day;
  }

  getHours() {
    const hours = Math.floor((this._diff / (1000 * 60 * 60)) % 24);
    return hours;
  }

  getMinutes() {
    const minutes = Math.floor((this._diff / (1000 * 60)) % 60);
    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor((this._diff / 1000) % 60);
    return seconds;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this._updateTime();
      callback({
        day: this.getDay(),
        hours: this.getHours(),
        minutes: this.getMinutes(),
        seconds: this.getSeconds(),
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

export { DateNewYar };
