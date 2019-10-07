const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let { user } = require('./controllers');
let { user: userMiddleware } = require('./middleware');
let { provider } = require('./dataBase');

app.get('/login', (req, res) => {
    res.render('login', {title: 'HELLO WORLD', group: 'jscx-july-19'})
});

app.post('/users', userMiddleware.checkUserValidityMiddleware, user.createUser);
app.get('/users/:user_id', userMiddleware.isUserPresentMiddleware, user.getById);
app.get('/users', user.findAll);

app.all('*', async (req, res) => {

    let [query] = await provider.promise().query('SELECT * FROM user');

    res.json(query)
});

app.listen(3000, () => {
    console.log('HELLO');
});
