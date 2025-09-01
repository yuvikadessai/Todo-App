const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./db");
const login_example = require("./routes");


const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/login', login_example);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});