let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log("Original employee:", employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log("Updated employee (non-destructive):", updatedEmployee);

console.log("Original employee after non-destructive update:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
console.log("Employee after destructive update:", employee);

let employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without address (non-destructive):", employeeWithoutAddress);

console.log("Original employee after non-destructive deletion:", employee);

destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee after destructive deletion:", employee);

