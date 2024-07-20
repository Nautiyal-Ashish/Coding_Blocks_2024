const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')


// middleware of cookie parser
// app.use(cookieParser());
// signed cookie middleware
app.use(cookieParser('youneedbettersecret'));

app.get('/', (req, res) => {
    console.log(req.cookies);
    // res.send(req.cookies); // all unsigned cookies
    res.send(req.signedCookies); //all signed cookies
})

// signed cookie
app.get('/getsignedcookies', (req, res) => {
    res.cookie('bindass', 'Ashish', { signed: true });
    res.send('cookie sent succesfully')

})

// app.get('/setcookie', (req, res) => {
//     res.cookie('mode', 'dark');
//     res.cookie('location', 'delhi');
//     res.cookie('username', 'ashish');
//     res.send('Server sent you cookies')
// })


// app.get('/getcookies', (req, res) => {
//     let { mode, location, username } = req.cookies;
//     res.send(` Name is ${username} , Live in ${location}, Theme is ${mode}`);
// })




app.listen(8080, () => {
    console.log('Server Connected on port 8080');
})