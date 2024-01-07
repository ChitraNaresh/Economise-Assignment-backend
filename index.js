const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const todoRouter = require("./src/todoRouter/index");

const dbConfig = require("./src/config/dbConfig");

const app = express();
app.use(express.json());
app.use(cors());

const portValue = process.env.PORT || 5007;

app.use("/api/todo", todoRouter);
app.listen(portValue, () => console.log("Server connected successfully"));