const path = require('path')
const fs =require('fs')
const app = require('express').Router()
const uuid = require('../helpers/uuid')

// RETURNS INDEX.HTML FROM PUBLIC FOLDER
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
  });



// RETURNS NOTES.HTML FROM PUBLIC FOLDER
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
  });

module.exports = app;