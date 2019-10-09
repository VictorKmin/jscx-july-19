const router = require('express').Router();


router.get('/xxx', (req, res)=> {
    res.json('WE ARE IN HOUSE ROUTER')
});


module.exports = router;