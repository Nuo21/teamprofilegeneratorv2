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
function start() {
  function appStart() {
    //First prompt once user runs app
    inquirer
      .prompt([
        {
          type: "list",
          name: "firstPrompt",
          message:
            "Hello! Welcome to the Team Profile Generator. Let's start by adding the Manager.",
          choices: ["Okay", "Close App"],
        },
      ])
      .then((userAnswer) => {
        switch (userAnswer.firstPrompt) {
          case "Okay":
            addManager();
            break;
          default:
            generateHTML();
        }
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID?",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((userAnswer) => {
        const manager = new Manager(
          userAnswer.managerName,
          userAnswer.managerId,
          userAnswer.managerEmail,
          userAnswer.managerOfficeNumber
        );
        teamArray.push(manager);
        addMember();
      });
  }

  function addMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: `Please select which member you'd like to add next. If you are finished, you may choose to "Close App"`,
          choices: ["Engineer", "Intern", "Close App"],
        },
      ])
      .then((userAnswer) => {
        switch (userAnswer.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }
}
