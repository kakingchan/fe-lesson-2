const rp = require('request-promise');

class addToPhp {
    constructor(ctx) {
        this.ctx = ctx;
        this.serverUrl = 'http://localhost';
    }

    async query(api) {
        let data = null;
        const url = `${this.serverUrl}/${api}`;
        let opt = {
            uri: url,
            json: true,
            method: 'GET',
        }
        let res = await rp(opt)
        return res;
    }
}
module.exports = addToPhp