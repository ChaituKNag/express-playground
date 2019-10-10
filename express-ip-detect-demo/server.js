const express = require('express')
const app = express();

app.get('/', (req, res) => {
    console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress);
    res.status(200).end();
});

app.listen(3000, () => console.info('http://localhost:3000'));