const express = require('express')
const app = express();
const requestIp = require('request-ip');

app.use(requestIp.mw());

app.get('/ip', (req, res) => {
    
    res.json({
        "ip": req.clientIp,
        "name": "Naga"
    })
});

app.listen(3000, () => console.info('http://localhost:3000'));