const fs =require('fs')
const app = require('express').Router()
const uuid = require('../helpers/uuid');
const fsUtils = require('../helpers/fsUtils');


// RETURNS ALL SAVED NOTES IN JSON FORMAT
app.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const getNotes = JSON.parse(data);
      res.json(getNotes);
    });
  });
 
  // DATA ADDED TO DB.JSON AND RETURN NOTE 
  app.post('/notes', (req,res)=> {
    if(req.body){
      const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
      };
      console.log(req.body)
      console.log(uuid)
      
      fsUtils(newNote, './db/db.json')
      res.json(`New note was added!`);
    } else{
      res.error('error if note isnt added')
    }
  });

  module.exports = app;