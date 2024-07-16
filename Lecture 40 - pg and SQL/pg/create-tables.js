// create

const getClient = require('./utils');

// console.log(getClient);

// console.log(getClient());

async function createTableUser() {
    let createTableUser = 'CREATE TABLE users (id SERIAL PRIMARY KEY,email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(250) NOT NULL);'

    let client = await getClient();
    await client.query(createTableUser);
    console.log("Table user-1 Created");
}

// createTableUser()

async function createTableTodos() {
    let createTableTodos = 'CREATE TABLE todos (id SERIAL PRIMARY KEY,title VARCHAR(50) UNIQUE NOT NULL, decription TEXT NOT NULL, user_id INTEGER REFERENCES users(id), done BOOLEAN DEFAULT FALSE);'

    let client = await getClient();
    await client.query(createTableTodos);
    console.log("Table todo-1 Created");
}

// createTableTodos()