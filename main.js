const express = require('express');

let counts = {};
let app = express();

app.use((req, res, next) => {
    if (req.originalUrl.includes('test.gif')) {
        console.log("Headers: ", 
            req.headers["x-forwarded-for"],
            req.headers["true-client-ip"],
            req.headers['referer']
        );
        console.log("Original Url: ", req.originalUrl)

        if (counts[req.originalUrl])
            counts[req.originalUrl]++;
        else
            counts[req.originalUrl] = 1;
    
        console.log("Counts: ", counts);
    }

    res.sendFile(__dirname + "/public/test.gif");
});

app.listen(80, () => console.log("Running at 80"));
