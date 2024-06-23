const express = require('express')
const app = express()

console.log("Hello my name is Ashish");

// -----------------------------
// will run on any path of localhost://8080/anyPath
// app.use(callbackFunction(request,response,next middleware function))
let pass = 'sam';
//if correct admin page will run otherwise will show wrong passwordb

app.use('/admin', (req, res, next) => {
    console.log('use wala admin ');
    if (pass === 'sam') {
        // next(); //calling the next middleware function present inside the callback function
        res.send('lolipop')
    }
    else {
        return res.send('Wrong Password');
    }
})
// in this use wala admin will run because admin is common in both the dowm and the up function
app.get('/admin/sam', (req, res) => {
    console.log("Got the admin Request");
    res.send('<h1>Admin Response</h1>')
    // console.log(res);
})


// -------------------------------------
// app.listen(port,callbackFunction)
//default port for backend -> 8080
app.listen(8080, () => {
    console.log('Server Connected at port 8080');
});

// -----------------------------------

// app.get(path,callbackFunction(request,response))
app.get('/ash', (req, res) => {
    console.log("Got the ash Request");
    res.send('<h1>Response from ash </h1>')
    // console.log(req);
})

app.get('/admin', (req, res) => {
    console.log("Got the admin Request");
    res.send('<h1>Admin Response</h1>')
    // console.log(res);
})

