let { Client } = require('pg');

async function getClient() {
    const client = new Client({
        user: 'postgres',
        password: '123',
        host: 'localhost',
        port: 5432,
        database: 'live-web-db',
    })
    await client.connect();
    return client;
}

module.exports = getClient;