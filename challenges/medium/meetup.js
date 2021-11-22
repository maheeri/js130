class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    const DAY_TO_NUM = {
      sunday: 0,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6
    };

    let dayNum = DAY_TO_NUM[weekday.toLowerCase()];
    let normalizedSchedule = schedule.toLowerCase();
    let currDate = new Date(this.year, this.month - 1, 1);
    return this._findDateForSchedule(normalizedSchedule, currDate, dayNum);
  }

  _findDateForSchedule(normalizedSchedule, currDate, dayNum) {
    switch (normalizedSchedule) {
      case 'first':
        return this._findOccurrenceDate(currDate, dayNum, 1);
      case 'second':
        return this._findOccurrenceDate(currDate, dayNum, 2);
      case 'third':
        return this._findOccurrenceDate(currDate, dayNum, 3);
      case 'fourth':
        return this._findOccurrenceDate(currDate, dayNum, 4);
      case 'fifth':
        return this._findOccurrenceDate(currDate, dayNum, 5);
      case 'last':
        return this._findLastOccurrenceDate(currDate, dayNum);
      case 'teenth':
        return this._findTeenthOccurrenceDate(currDate, dayNum);
      default:
        return null;
    }
  }

  _findOccurrenceDate(currDate, dayNum, requiredOccurrence) {
    let currentOccurrence = 0;
    while (currDate.getMonth() === (this.month - 1)) {
      if (currDate.getDay() === dayNum) {
        currentOccurrence += 1;
        if (requiredOccurrence === currentOccurrence) {
          return currDate;
        }
      }
      currDate.setDate(currDate.getDate() + 1);
    }
    return null;
  }

  _findLastOccurrenceDate(currDate, dayNum) {
    let result = currDate;
    while (currDate.getMonth() === (this.month - 1)) {
      if (currDate.getDay() === dayNum) {
        result = new Date(currDate.toString());
      }
      currDate.setDate(currDate.getDate() + 1);
    }
    return result;
  }

  _findTeenthOccurrenceDate(currDate, dayNum) {
    while (currDate.getMonth() === (this.month - 1)) {
      if (currDate.getDay() === dayNum && this._isTeenth(currDate)) {
        return currDate;
      }
      currDate.setDate(currDate.getDate() + 1);
    }
    return null;
  }

  _isTeenth(currDate) {
    return currDate.getDate() >= 13 && currDate.getDate() <= 19;
  }
}

module.exports = Meetup;