class Clock {
  static MINUTES_IN_HOUR = 60;
  static HOURS_IN_DAY = 24;

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes ? minutes : 0;
  }

  subtract(minutes) {
    let hoursToSubtract = Math.floor(minutes / Clock.MINUTES_IN_HOUR);
    let leftoverMinutesToSubtract = minutes % Clock.MINUTES_IN_HOUR;

    let newHours = this.hours - hoursToSubtract;
    let newMinutes = this.minutes - leftoverMinutesToSubtract;

    if (newMinutes < 0) {
      newHours -= 1;
    }

    this._assignNewTime(newHours, newMinutes);
    return this;
  }

  add(minutes) {
    let hoursToAdd = Math.floor(minutes / Clock.MINUTES_IN_HOUR);
    let leftoverMinutesToAdd = minutes % Clock.MINUTES_IN_HOUR;

    let newHours = this.hours + hoursToAdd;
    let newMinutes = this.minutes + leftoverMinutesToAdd;

    if (newMinutes > Clock.MINUTES_IN_HOUR) {
      newHours += 1;
    }

    this._assignNewTime(newHours, newMinutes);

    return this;
  }

  toString() {
    let hoursString = this.hours.toString();
    let paddedHoursString = hoursString.length > 1 ? hoursString : `0${hoursString}`;

    let minutesString = this.minutes.toString();
    let paddedMinutesString = minutesString.length > 1 ? minutesString : `0${minutesString}`;

    return `${paddedHoursString}:${paddedMinutesString}`;
  }

  isEqual(other) {
    return this.hours === other.hours && this.minutes === other.minutes;
  }

  _assignNewTime(newHours, newMinutes) {
    this.hours = this._mod(newHours, Clock.HOURS_IN_DAY);
    this.minutes = this._mod(newMinutes, Clock.MINUTES_IN_HOUR);
  }

  _mod(number, divisor) {
    return ((number % divisor) + divisor) % divisor;
  }
}

module.exports = Clock;