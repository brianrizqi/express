const express = require('express');
const app = express();
const path = require('path');

//hbs //npm install hbs
app.set('view engine', 'hbs');
app.use('/public', express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    console.log('middleware yang tidak terikat route')
    next();
})

app.use("/user/*", function (req, res, next) {
    console.log('middleware yang terikat route')
    next();
})
//routing
app.get("/", function (req, res) {
    res.render('index');
})

app.get('/user/name/:name', function (req, res) {
    res.send(req.params.name);
})

app.get('/user/id/:id', function (req, res) {
    res.send(req.params.id);
})

app.listen(3000, function () {
    console.log('server berjalan')
})
