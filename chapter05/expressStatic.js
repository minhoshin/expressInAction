const express = require("express");
const path = require("path");
const app = express();

let publicPath = path.resolve(__dirname, "public");
let userUploadsPath = path.resolve(__dirname, "user_uploads");

app.use(express.static(publicPath));
app.use(express.static(userUploadsPath));