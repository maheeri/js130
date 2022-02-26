/* eslint-disable max-lines-per-function */
class Meetup {
  static DAYS = ['sunday', 'monday', 'tuesday', 'wednesday',
    'thursday', 'friday', 'saturday'];

  constructor(year, monthNumber) {
    // Subtract 1 since JS dates are indexed from 0
    this.meetupMonthStart = new Date(year, monthNumber - 1);
  }

  day(dayName, occurrence) {
    let normalizedDayName = dayName.toLowerCase();
    switch (occurrence.toLowerCase()) {
      case 'first':
        return this._dateOnOccurrence(normalizedDayName, 1);
      case 'second':
        return this._dateOnOccurrence(normalizedDayName, 2);
      case 'third':
        return this._dateOnOccurrence(normalizedDayName, 3);
      case 'fourth':
        return this._dateOnOccurrence(normalizedDayName, 4);
      case 'fifth':
        return this._dateOnOccurrence(normalizedDayName, 5);
      case 'last':
        return this._lastOccurrence(normalizedDayName);
      case 'teenth':
        return this._teenthOccurence(normalizedDayName);
      default:
        break;
    }
    return null;
  }

  _dateOnOccurrence(normalizedDayName, occurrenceNumber) {
    let currentOccurrenceNumber = 0;
    let meetupDate = new Date(this.meetupMonthStart);
    while (true) {
      // We couldn't find the occurrence and overflowed to the next month
      if (meetupDate.getMonth() !== this.meetupMonthStart.getMonth()) {
        return null;
      }

      if (meetupDate.getDay() === Meetup.DAYS.indexOf(normalizedDayName)) {
        currentOccurrenceNumber += 1;
      }

      if (currentOccurrenceNumber === occurrenceNumber) {
        break;
      }

      meetupDate.setDate(meetupDate.getDate() + 1);
    }
    return meetupDate;
  }

  _lastOccurrence(dayName) {
    let currentMeetupDate = new Date(this.meetupMonthStart);
    let lastDate;
    while (currentMeetupDate.getMonth() === this.meetupMonthStart.getMonth()) {
      if (currentMeetupDate.getDay() === Meetup.DAYS.indexOf(dayName)) {
        lastDate = new Date(currentMeetupDate);
      }
      currentMeetupDate.setDate(currentMeetupDate.getDate() + 1);
    }
    return lastDate;
  }

  _teenthOccurence(dayName) {
    let meetupDate = new Date(this.meetupMonthStart);
    while (true) {
      if (meetupDate.getDay() === Meetup.DAYS.indexOf(dayName)) {
        if (meetupDate.getDate() > 12) {
          break;
        }
      }
      meetupDate.setDate(meetupDate.getDate() + 1);
    }
    return meetupDate;
  }
}

module.exports = Meetup;