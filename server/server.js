require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.use(express.json());

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/upload", require("./routes/upload"));



const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
