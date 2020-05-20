let employees = [
  {
    id: 1,
    name: "christian",
  },
  {
    id: 2,
    name: "jose",
  },
  {
    id: 3,
    name: "juan",
  },
];

let salaries = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 2000,
  },
];

let getEmployee = (id, callback) => {
    let employeeDB = employees.find(employee => employee.id === id);
    // employeeDB === null ERROR
    if (!employeeDB) {
        callback(`No existe el empleado con el id: ${id}`); // callback('No existe el empleado con el id: ' + id);
    }
    else {
        callback(null, employeeDB);
    }
}

let getSalary = (employee, callback) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if(!salaryDB) {
      callback(`No existe un salario para el empleado ${employee.name}`);
    }
    else {
      callback(null, {
        name: employee.name,
        salary: salaryDB.salary,
        id: employee.id
      });
    }
}

getEmployee(2, (err, employee) => {
  if(err) {
      return console.log(err);
  }
  getSalary(employee, (err, salary) => {
    if(err) {
      return console.log(err);
    }
    console.log(salary);
  })
});
