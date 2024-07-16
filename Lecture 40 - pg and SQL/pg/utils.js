// const pg = require('pg');

// const { Client } = pg;

const { Client } = require('pg');

// connection in a function and returning a client to use in another file
async function getClient() {
    const client = new Client({
        user: 'postgres',
        password: '123',
        host: 'localhost',
        port: 5432,
        database: 'pgdb',
    })

    await client.connect()
    return client;
}

module.exports = getClient;


