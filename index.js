const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Hello VenturX app listening at http://localhost:${port}`);
});

app.get('/greetings/:name', function (req, res) {
    if (req.params.name) {
        res.send(`Hello ${req.params.name}!`);
    } else {
        res.send(`Hello there!`);
    }
    throw new Error('Something went wrong!')
});

app.get('/', function (req, res) {
    res.send('Add <b>/greeting/&lt;your name&gt;</b> to see the result.');
});

app.get('/greetings', function (req, res) {
    res.send('Add <b>/&lt;your name&gt;</b> to see the result.');
});