//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");
// import  from "__dirname + /date.js";
// const getDate = require("./getDate");
// const getDate = require('/views/getDate');
const getDate = require('./views/date.js');
// import {getDate} from './views/date.js';

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  

  res.render("list", { listTitle: getDate, newListItems: items });
});

app.post("/", (req, res) => {

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }  
});

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", (req, res) => {
    res.render("about");
})

// app.post("/work", (req, res) => {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
