const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const app = express();
const db = require('./dataBase').getInstance();
db.setModels();
global.appRoot = __dirname;

app.use(morgan('dev'));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {userRouter, houseRouter, authRouter} = require('./router');

app.get('/login', (req, res) => {
    res.render('login', {title: 'HELLO WORLD', group: 'jscx-july-19'})
});

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);

app.all('*', async (req, res) => {

    let obj = {}

    const email = obj && obj.person && obj.person.name;

    res.json(email)
});

app.listen(3000, () => {
    console.log('3000');
});
