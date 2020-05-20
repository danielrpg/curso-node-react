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

let getEmployee = async id => {
    let employeeDB = employees.find(employee => employee.id === id);

    if(!employeeDB) {
        throw new Error(`No existe un empleado con el id: ${id}`);
    } else {
        return employeeDB;
    }
}

let getSalary = async employee => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if(!salaryDB) {
        throw new Error(`No existe un salario para el empleado ${employee.name}`);
    } else {
        return {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
          };
    }
};

let getInformation = async id => {
    let employee = await getEmployee(id);
    let salary = await getSalary(employee);
    return `${employee.name} tiene el salario de ${salary.salary}`;
}

getInformation(1)
    .then(res => console.log(res))
    .catch(err => console.log(err));
