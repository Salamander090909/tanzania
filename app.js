const express = require("express");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index', {
    vipps: '12345',            // bytt til ekte Vipps-nummer
    konto: '1234.56.78901',    // bytt til ekte kontonummer
    vippsLenke: '#'            // evt. lenke til Vipps-innsamling
  });
});

app.listen(process.env.PORT)
