const router = require('express').Router();

const {user: userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', user.createUser);
router.get('/:user_id', userMiddleware.isUserPresentMiddleware, user.getById);
router.get('/', user.findAll);

module.exports = router;