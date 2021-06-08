import moment from "moment";
import "moment/locale/pt-br";
export default class DateCustom {
  constructor(date = moment(), format = "DD/MM/YYYY") {
    this._date = date;
    this._format = format;
  }

  getMoment() {
    return moment();
  }

  getDate(format = this._format, date = this._date) {
    const newDate = moment(date).format(format);
    if (newDate === "Invalid date") {
      return null;
    }
    return newDate;
  }

  getMonth(month = this._date) {
    return moment().month(month).format(this._format);
  }

  arrayMonth() {
    return moment.monthsShort();
  }

  arrayDays() {
    const daysInMonth = moment(this._date).daysInMonth(),
      daysMonth = [];
    for (let index = 1; index <= daysInMonth; index++) {
      daysMonth.push(index);
    }
    return daysMonth;
  }

  addDate(amount, unit) {
    return moment(this._date).add(amount, unit);
  }

  subtractDate(amount, unit) {
    return moment(this._date).subtract(amount, unit);
  }

  duration(current = 0) {
    const ms = current * 1000;
    let seconds = moment.duration(ms).seconds();
    seconds = String(seconds);
    seconds = seconds.length === 1 ? `0${seconds}` : seconds;
    let minutes = moment.duration(ms).minutes();
    minutes = String(minutes);
    minutes = minutes.length === 1 ? `${minutes}` : minutes;
    let hours = moment.duration(ms).hours();
    hours = String(hours);
    hours = hours.length === 1 ? `${hours}` : hours;
    const durations = { seconds, minutes, hours };
    return durations;
  }
}
