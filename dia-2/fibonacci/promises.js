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

let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);

        if(!employeeDB) {
            reject(`No existe el empleado con el id: ${id}`);
        }
        else {
            return resolve(employeeDB);
        }
    });
}

let getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);
    if(!salaryDB) {
      reject(`No existe un salario para el empleado ${employee.name}`);
    }
    else {
      resolve({
        name: employee.name,
        salary: salaryDB.salary,
        id: employee.id
      });
    }
  });
}


getEmployee(1)
    .then((employee) => {
        return getSalary(employee);
    })
    .then(salary => console.log(salary))
    .catch((err) => console.log(err));

