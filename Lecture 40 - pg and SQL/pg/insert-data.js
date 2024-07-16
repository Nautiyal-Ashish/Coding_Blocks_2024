const getClient = require('./utils');

async function insertUserData() {
    let client = await getClient()
    let userQuery = `INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id;`
    let userValue = ['one@gmail.com', '123']
    let userResponse = await client.query(userQuery, userValue)
    console.log(userResponse.rows[0], '1')
    // console.log(response.rows[0].id, '1')

    // --------
    let todoQuery = `INSERT INTO todos(title,decription,user_id,done) VALUES ($1,$2,$3,$4) ;`
    let todoValue = ['Gym', 'lift heavy', userResponse.rows[0].id, false]
    await client.query(todoQuery, todoValue)
    console.log('todo created')
}

insertUserData();

