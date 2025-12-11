const express = require('express');
const { faker } = require('@faker-js/faker');


const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createFakeUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
};

const createFakeCompany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    };
};


const users=[]
const company=[]

// for (let i = 0; i <20; i++) {
//     const user = createFakeUser()
//     users.push()
//     const company  = createFakeCompany()
//
// }
app.get('/api/users/new', (req, res) => {
    const user = createFakeUser()
    res.send(user);
});

app.get('/api/companies/new', (req, res) => {
    const user = createFakeCompany()
    res.send(user);
});


app.get('/api/users/company', (req, res) => {
    const user = createFakeUser()
    console.log(user)
    const company = createFakeCompany()
    console.log(company)
    const obj = {user, company}
    console.log(obj)
    res.send(obj);
});






app.listen(port, () => {
    console.log(`asdasd listening at http://localhost:${port}`);
});
