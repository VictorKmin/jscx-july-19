let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/:car_id', (req, res) => {

    console.log(req.params);

    res.json('Auto ' + req.params.car_id)
});

app.get('/myurl', (req, res) => {
    res.write('another url');

    res.end()
});

app.post('/', (req, res) => {
    // console.log(req.body);

    res.end('edn')
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(3000)
    }
})
