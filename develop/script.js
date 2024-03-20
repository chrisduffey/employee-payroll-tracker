// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");


  





// console.log(employee(salary))
// const salaries = ()
// const avgSalary =

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
let go = true;

while (go) { 
const firstName = prompt("Employee first name");
const lastName = prompt("Employee last name");
const salary = prompt("Employee Salary");

const employee = {
  firstName,
  lastName,
  salary: parseInt(salary),
};
employeesArray.push(employee);

  const on = confirm("Would you like to add another employee?"); 
  if (!on) {
    go = false;
  
  }
}
console.log(employeesArray);
return employeesArray;
};



// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0
  for(let i = 0; i < employeesArray.length; i++){
  console.log (employeesArray[i].salary)
  sum = sum +employeesArray[i].salary
  }
  console.log(sum /employeesArray.length)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  console.log(randomIndex);
  const employee = employeesArray[randomIndex]
  console.log(`${employee.firstName} ${employee.lastName}`)
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);






// GIVEN an employee payroll tracker
// WHEN I click the "Add employee" button
// THEN I am presented with a series of prompts asking for first name, last name, and salary
// WHEN I finish adding an employee
// THEN I am prompted to continue or cancel
// WHEN I choose to continue
// THEN I am prompted to add a new employee
// WHEN I choose to cancel
// THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data