const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (request, response) => {
    response.send("hello world!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});