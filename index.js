const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

let app = express();

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log("app listening on http://localhost:" + PORT);
})