const path = require('path');
const express = require('express');

const app = express();

let counter = 0;

app.use((req, res, next) => {
    console.log("Accessed: ", req.url, ", Counter: ", counter++);
    next();
});

app.use("/", express.static(__dirname));

app.use((req, res) => {
    res.send({ message: "Here" });
})

app.listen(80);

console.log("Started");