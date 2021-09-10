const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to the home page");
});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("wazap app !!");
});