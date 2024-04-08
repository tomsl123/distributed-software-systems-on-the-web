// Manually copying properties to merge objects
var person = {
    name: 'John',
    age: 30
};

var jobDetails = {
    title: 'Developer',
    department: 'Engineering'
};

// Merging person and jobDetails objects
var employee = {
    name: person.name,
    age: person.age,
    title: jobDetails.title,
    department: jobDetails.department
};

console.log(employee); // Output: { name: 'John', age: 30, title: 'Developer', department: 'Engineering' }
