'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});
app.get('/duc', (req, res) => {
    res.send('sacasncjakjcnansjkcasndocker p')
})

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);