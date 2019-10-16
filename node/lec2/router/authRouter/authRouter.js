const router = require('express').Router();

const {auth} = require('../../controllers');
const {user: userMiddleware} = require('../../middleware');

router.post(
    '/',
    userMiddleware.getUserAuthMiddleware,
    auth.authUser
);

module.exports = router;
