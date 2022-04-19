const log = require('./log');

const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
};

const isDate = (date) => {
    if (date instanceof Date && !isNaN(date)) {
        return true;
    } else {
        return false;
    }
};

const format = (input, format) => {
    try {
        let date = input;
        if (!isDate(input)) {
            const date_reformat = input.replace(/%3A/g, ':');
            date = new Date(date_reformat);
            if (!isDate(date)) {
                return undefined;
            }
        }
        // log.debug(`Date to format: ${date}`);
        switch (format) {
            case 'DD-MM-YYYY':
                return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('-');
                break;
            case 'DDMMYYYY':
                return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('');
                break;
            case 'MM-DD-YYYY':
                return [padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate()), date.getFullYear()].join('-');
                break;
            case 'MMDDYYYY':
                return [padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate()), date.getFullYear()].join('');
                break;
            case 'YYYY-MM-DD':
                return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-');
                break;
            case 'YYYYMMDD':
                return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('');
                break;
            case 'HH:MM':
                return [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(':');
                break;
            case 'HHMM':
                return [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join('');
                break;
            default:
                return undefined;
        }
    } catch (err) {
        log.error(`Date conversion error: ${err}`);
        return undefined;
    }
};

module.exports = {
    format,
};
