// Creating variables and requiring the dependencies and classes/constructors created in lib
const inquirer = require("inquirer");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("");

//This will become the array for the team the user creates
const teamArray = [];

//This is what will run when the user starts the app
function start() {}
