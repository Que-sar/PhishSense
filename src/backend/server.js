require("dotenv").config({
  path: "/home/ignotus/Documents/phishsense/phishsense/src/backend/.env",
});

// routes/api.js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT);
});
