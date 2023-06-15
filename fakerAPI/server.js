const express= require("express")
const { faker } = require('@faker-js/faker')

const app= express()

const port= 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const createUser= () => {
    const User={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.string.uuid()
    }
    return User
}
const createCompany= () => {
    const Company={
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return Company
}

const Users= [];
const Companies= [];
// const newFakeUser= createUser();
// console.log(newFakeUser)
console.log(Users)

app.get('/api/users/new', (req, res) =>{
    const newUser = createUser()
    Users.push(newUser)
    res.json(newUser)
    console.log(Users)
})

app.get('/api/companies/new', (req, res) =>{
    const newCompany = createCompany()
    Companies.push(newCompany)
    res.json(newCompany)
    console.log(Companies)
})

app.get('/api/user/company', (req, res) =>{
    const newUser = createUser()
    const newCompany = createCompany()
    res.json({ user: newUser, company: newCompany })
    console.log(Users, Companies)
})


app.listen(port, () => console.log("Beep boop hello"))