const rp = require('request-promise');

class addToPhp {
    constructor(ctx) {
        this.ctx = ctx;
        this.serverUrl = 'http://localhost';
    }

    async query(api, msg) {
        let data = null;
        const url = `${this.serverUrl}/${api}`;
        let opt = {
            uri: url,
            json: true,
            method: 'GET',
        }
        const res = await rp(opt).then((data) => {
            return data
        });
        return res;
    }

    async add(api, msg) {
        let data = null;
        const url = `${this.serverUrl}/${api}`;
        let opt = {
            uri: url,
            json: true,
            method: 'POST',
            formData: msg
        }
        const res = await rp(opt).then((data) => {
            console.log(data)
            return data
        });
        return res;
    }
}
module.exports = addToPhp