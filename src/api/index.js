const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json('success');
})

app.listen(4000)