const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

const users = [];

app.engine('.hbs', expHbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('main', { title: 'HELLO WORLD', group: 'jscx-july-19'})
});

app.post('/register', (req, res) => {
    let body = req.body;
    users.push(body);
    res.render('login')
});

app.get('/users/:user_id', (req,res)=> {
    console.log(req.params);
    console.log(req.query);
    res.end(JSON.stringify(req.params))
});

app.all('*', (req, res)=> {
    res.status(505).json('NOT FOUND? SORRY')
});


app.listen(3000, () => {
    console.log('HELLO');
});
