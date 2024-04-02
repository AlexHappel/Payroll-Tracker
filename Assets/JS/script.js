// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//adding a new employee?

let employeesArray = [];

const collectEmployees = function() {
  let newEmployee = true;
   while(newEmployee) {
    newEmployee = confirm('Are you sure you want to add a new employee?')
// Collect employee data
   if(newEmployee) {
    let addFirstName = prompt('Enter the first name of the Employee.');
    let addLastName = prompt('Enter the last name of the Employee.');
    let addSalary;
    do {

     addSalary = prompt('Enter the salary of the employee.');
     if (isNaN(addSalary)) {
      alert('please enter a valid number for this entry');
     }

    } while (isNaN(addSalary));

    let employee = {
      firstName : addFirstName,
      lastName : addLastName,
      salary : parseFloat(addSalary),
    }


    employeesArray.push(employee);
  }
}
return employeesArray;
}
// TODO: Get user input to create and return an array of employee object

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log('The average salary:', averageSalary.toFixed(2)); // Display average salary with 2 decimal places

  // TODO: Calculate and display the average salary
}

// Select a random employee

const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log('There are no employees to select.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length); // Generate a random index
  const randomEmployee = employeesArray[randomIndex]; // Get the employee object at the random index
  
  // Display the random employee
  console.log('Congratulations',randomEmployee.firstName,randomEmployee.lastName,'you have won!');

  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
