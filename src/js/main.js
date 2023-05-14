let t;
function setupClock() {
    clearTimeout(t);

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;

    const time = hh + ':' + mm + ':' + ss;

    if (time === '00:00:00' || time === '23:59:59') {
        setupDate();
    }

    document.getElementById('time').innerText = time;
    t = setTimeout(function () { setupClock() }, 1000);
}

function setupDate() {
    const date = new Date();
    let yyyy = date.getFullYear();
    let MM = date.getMonth() + 1;
    let dd = date.getDate();

    MM = (MM < 10) ? '0' + MM : MM;
    dd = (dd < 10) ? '0' + dd : dd;

    const dateText = yyyy + '-' + MM + '-' + dd;
    document.getElementById('date').innerText = dateText;
}

function count() {
    const amount =  document.getElementById('calculator-amount').value;
    const percentage =  document.getElementById('calculator-percentage').value;
    const rate = document.getElementById('calculator-rate').value;

    const total = ((amount * percentage / 100)) / rate;
    const rounded = Math.round((total + Number.EPSILON) * 100) / 100

    document.getElementById('calculator-total').value = rounded;
}

function addDays(date, days) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
}

const dateRegex = new RegExp();
const dateFormat = "yyyy-MM-dd";
const easterSecondDay = [
    '2023-04-10', // easter '2023-04-09'
    '2024-04-01', // easter '2024-03-31'
    '2025-04-21', // easter '2025-04-20'
    '2026-04-06', // easter '2026-04-05'
    '2027-03-29'  // easter '2027-03-28'
];
const dayOffsInLt = [
    '01-01',
    '02-16',
    '03-11',
    '05-01',
    '06-24',
    '07-06',
    '08-15',
    '11-01',
    '11-02',
    '12-24',
    '12-25',
    '12-26'
];

function countDate() {
    const startDateValue = document.getElementById('calc-date-start').value;
    if (!dateRegex.test(startDateValue)) {
        showWarningToast("Wrong date format. Should be YYYY-MM-DD (2022-01-15)");
    } else {
        const days = document.getElementById('calc-date-days').value;
        const startDate = new Date(startDateValue + "T00:00:00.000Z");

        const partialDate = addDays(startDate, parseInt(days));
        const partialDateValue = partialDate.toLocaleDateString('lt-LT');
        document.getElementById('calc-date-partial').value = partialDateValue;

        // check is dayoff
        const exactDate = getFirstWorkingDay(getFirstNotDayOff(partialDate));
        const exactDateValue = exactDate.toLocaleDateString('lt-LT');
        document.getElementById('calc-date-total').value = exactDateValue;
    }
}

function getFirstNotDayOff(date) {
    let totalDate = getFirstWorkingDay(date);
    while (isDayOff(totalDate)) {
        totalDate = addDays(totalDate, 1);
    }
    return totalDate;
}

function getFirstWorkingDay(date) {
    if (isSaturday(date)) {
        return addDays(date, 2);
    } else if (isSunday(date)) {
        return addDays(date, 1);
    }
    return date;
}

function isDayOff(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = (month < 10) ? '0' + month : month;
    day = (day < 10) ? '0' + day : day;

    const dateShort = month + '-' + day;
    const dateLong = year + '-' + month + '-' + day;
    return easterSecondDay.includes(dateLong) || dayOffsInLt.includes(dateShort);
}

function isSaturday(date) {
    return date.getDay() === 6;
}

function isSunday(date) {
    return date.getDay() === 0;
}
