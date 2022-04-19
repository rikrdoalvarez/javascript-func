const chai = require('chai');
const { expect } = require('chai');
const dateFormat = require('../dateFormat');

describe('Date Format ', () => {
    it('Date Format validation.', (done) => {
        const date = new Date('01-31-2022 12:15');
        const date_dmy = dateFormat.format(date, 'DDMMYYYY');
        const date_d_m_y = dateFormat.format(date, 'DD-MM-YYYY');

        const date_mdy = dateFormat.format(date, 'MMDDYYYY');
        const date_m_d_y = dateFormat.format(date, 'MM-DD-YYYY');

        const date_ymd = dateFormat.format(date, 'YYYYMMDD');
        const date_y_m_d = dateFormat.format(date, 'YYYY-MM-DD');

        const date_hm = dateFormat.format(date, 'HHMM');
        const date_h_m = dateFormat.format(date, 'HH:MM');

        expect(date_dmy).to.be.equal('31012022');
        expect(date_d_m_y).to.be.equal('31-01-2022');
        expect(date_mdy).to.be.equal('01312022');
        expect(date_m_d_y).to.be.equal('01-31-2022');

        expect(date_ymd).to.be.equal('20220131');
        expect(date_y_m_d).to.be.equal('2022-01-31');
        expect(date_hm).to.be.equal('1215');
        expect(date_h_m).to.be.equal('12:15');
        done();
    });
});
