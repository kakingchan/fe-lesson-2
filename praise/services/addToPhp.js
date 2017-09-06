import urllib from 'urllib';

class addToPhp {
    constructor(ctx) {
        this.ctx = ctx;
        this.serverUrl = 'https://localhost';
    }

    async request(api) {
        let data = null;
        const url = `${this.serverUrl}/${api}`;
        const request = await urllib.request(url);
        data = request.data;
        return data;
    }
}