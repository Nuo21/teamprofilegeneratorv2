module.exports = (theTeam) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cody's Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />  
  </head>
  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron text-black mb-3">
                <h1 class="text-center">The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="main-section col-12 d-flex justify-content-center">
             ${createTeam(theTeam)}
            </div>
        </div>
    </div>
  </body>
</html>
`;
};

//Creating the team
const createTeam = (theTeam) => {
  // Creating the manager
  const createManager = (manager) => {
    return `
          <div class="card">
              <div class="card-header text-center">
                  <h2 class="card-title">${manager.getName()}</h2>
                  <h4 class="card-title">Title: ${manager.getRole()}</h4>
              </div>
              <div class="card-body bg-light">
                  <ul class="list-group text-dark">
                      <li class="list-group-item">ID: ${manager.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                  </ul>
              </div>
          </div>
          `;
  };

  // Creating engineer
  const createEngineer = (engineer) => {
    return `
          <div class="card">
              <div class="card-header text-center">
                  <h2 class="card-title">${engineer.getName()}</h2>
                  <h4 class="card-title">Title: ${engineer.getRole()}</h4>
              </div>
              <div class="card-body bg-light">
                  <ul class="list-group text-dark">
                      <li class="list-group-item">ID: ${engineer.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
                  </ul>
              </div>
          </div>
          `;
  };

  // Creating intern
  const createIntern = (intern) => {
    return `
          <div class="card">
              <div class="card-header text-center">
                  <h2 class="card-title">${intern.getName()}</h2>
                  <h4 class="card-title">Title: ${intern.getRole()}</h4>
              </div>
              <div class="card-body bg-light">
                  <ul class="list-group text-dark">
                      <li class="list-group-item">ID: ${intern.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                      <li class="list-group-item">School: ${intern.getSchool()}</li>
                  </ul>
              </div>
          </div>
          `;
  };

  const html = [];

  html.push(
    theTeam
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  html.push(
    theTeam
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  html.push(
    theTeam
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return html.join("");
};
