const express = require('express');

const app = express();

// app.use(express.json());

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/', (req, res) => {
    res.send("Server root")
});

app.get('/status', (req, res) => {
    res.send("The server is alive!")
});
