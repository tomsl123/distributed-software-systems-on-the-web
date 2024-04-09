function displayUserDetails(user) {
    const {name, age, email} = user;

    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}

const user = {
    name: 'Jane Doe',
    age: 28,
    email: 'jane.doe@example.com'
};

displayUserDetails(user);
