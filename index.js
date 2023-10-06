const express = require("express");
const app = express();
const env = require('dotenv').config();
require('./app/DB/connection')

const { json } = require('express');
app.use(json());

app.get("/", (req, res) => {
    res.send("<h1 align='center'>back-end started...</h1>");
})

require('./app/routes/users')(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Port stat at ${PORT}`);
});