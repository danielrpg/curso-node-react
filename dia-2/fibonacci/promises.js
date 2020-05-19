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

getEmployee(1)
    .then((employee) => {
        // me devuelve el resultado
        console.log(employee);
    })
    .catch(function (err) { 
        // ocurre un error
        console.log(err);
    });

let getSalary = () => {
    // 
}