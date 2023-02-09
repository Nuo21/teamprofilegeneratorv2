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
const render = require("./src/template");

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

  //Adding a manager function
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

  //Adding a new member to the team function
  function addMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: `Please select which member you'd like to add next. If you are done adding members to your team, you may click "Finished"`,
          choices: ["Engineer", "Intern", "Finished"],
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

  //Copy and paste of manager function but switched to get input for an engineer
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((userAnswer) => {
        const engineer = new engineer(
          userAnswer.engineerName,
          userAnswer.engineerId,
          userAnswer.engineerEmail,
          userAnswer.engineerGithub
        );
        teamArray.push(engineer);
        addMember();
      });
  }

  //Copy and paste of manager function but switched to get input for an intern
  function addintern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
        },

        {
          type: "input",
          name: "internSchool",
          message: "Where does the intern go to school?",
        },
      ])
      .then((userAnswer) => {
        const intern = new intern(
          userAnswer.internName,
          userAnswer.internId,
          userAnswer.internEmail,
          userAnswer.internGithub
        );
        teamArray.push(intern);
        addMember();
      });
  }

  //This function will generate the HTML after the user is done using the app
  function generateHTML() {
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
  }

  appStart();
}

//Starts the application
start();
