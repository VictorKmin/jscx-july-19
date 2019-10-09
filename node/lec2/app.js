const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();
const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {userRouter, houseRouter} = require('./router');

app.get('/login', (req, res) => {
    res.render('login', {title: 'HELLO WORLD', group: 'jscx-july-19'})
});

app.use('/users', userRouter);
app.use('/houses', houseRouter);

app.all('*', async (req, res) => {
    const {resolve} = require('path');

    console.log(resolve(`./dataBase/models/TEST`));
    // let [query] = await provider.promise().query('SELECT * FROM user');

    res.json("ok")
});

app.listen(3000, () => {
    console.log('HELLO');
});
