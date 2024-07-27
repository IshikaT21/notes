const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
