const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to My Node.js Web App!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
