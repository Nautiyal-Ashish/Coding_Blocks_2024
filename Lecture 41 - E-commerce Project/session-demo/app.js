const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))

app.get('/', (req, res) => {
    res.send('Welcome to the Session')
})

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You visted the ${req.session.count} times`)
})

app.get('/setname', (req, res) => {
    req.session.username = "Ashish"
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    let { username = "anonymous" } = req.session;
    res.send(`hi from username ${username}`)
})

app.listen(5050, () => {
    console.log(`Server connected at port 8080`);
})