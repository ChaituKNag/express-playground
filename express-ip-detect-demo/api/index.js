const express = require('express')
const app = express();

app.set('trust proxy', true);

app.get('/', (req, res) => {
    console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress);
    console.log(req.ip, req.ips);
    res.status(200).end();
});

app.listen(3000, () => console.info('http://localhost:3000'));

module.exports = (req, res) => {
    console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress);
    console.log(req.ip, req.ips);
    res.status(200).end();
};