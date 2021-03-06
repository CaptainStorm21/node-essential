const express = require('express');
const app = express();

//middleware
app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date());
    return next();
});
//end middleware



app.get('/', (req, res, next) => {
    return res.send('Hello, This is webserver!')
})

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
    if (!req.query.name){
        return res.status(400).end();
    }
    return res.send(`Good morning from ${req.query.name}`);
});


app.get('/user/:name', (req, res, next) => {
    return res.send(`User profile of ${req.params.name}`);
});

app.listen(3000);