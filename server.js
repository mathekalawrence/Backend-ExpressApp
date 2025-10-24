
//Import Express
const express = require('express');

//Create an Express app
const app = express();

//Define a port
const PORT = 3000;

//Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express is on and actively running');

});

//Start the server
app.listen(PORT, () => {
    console.log(`The server is actively running on http://localhost:${PORT}`);

});