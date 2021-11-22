class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  add(minutes) {
    let hoursToAdd = Math.floor(minutes / 60);
    let minutesToAdd = minutes % 60;

    let newHours = this.hours + hoursToAdd;
    let newMinutes = this.minutes + minutesToAdd;
    if (newMinutes > 60) {
      newHours += 1;
    }
    this.hours = newHours % 24;
    this.minutes = newMinutes % 60;

    return this;
  }

  subtract(minutes) {
    let hoursToSubtract = Math.floor(minutes / 60);
    let minutesToSubtract = minutes % 60;

    let newHours = this.hours - hoursToSubtract;
    let newMinutes = this.minutes - minutesToSubtract;
    if (newMinutes < 0) {
      newMinutes += 60;
      newHours -= 1;
    }

    if (newHours < 0) {
      newHours = (newHours % 24) + 24;
    }

    this.hours = newHours;
    this.minutes = newMinutes;

    return this;
  }

  isEqual(clock2) {
    return (this.hours === clock2.hours) && (this.minutes === clock2.minutes);
  }

  toString() {
    let hourText = this.hours;
    if (this.hours < 10) {
      hourText = "0" + hourText;
    }

    let minuteText = this.minutes;
    if (this.minutes < 10) {
      minuteText = "0" + minuteText;
    }

    return `${hourText}:${minuteText}`;
  }
}

let clock = Clock.at(10, 9);
console.log(clock);

module.exports = Clock;