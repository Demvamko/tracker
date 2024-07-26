const express = require('express');

let counts = {};
let app = express();

app.use((req, res, next) => {
    console.log("Headers: ", req.headers);
    console.log("IP: ", req.ip);
    console.log("IPs: ", req.ips);
    console.log("Original Url: ", req.originalUrl)
    console.log("Query: ", req.query)

    if(counts[req.originalUrl])
        counts[req.originalUrl]++;
    else
        counts[req.originalUrl] = 1;

    res.sendFile(__dirname + "/public/test.gif");
});

app.listen(80, () => console.log("Running at 80"));
