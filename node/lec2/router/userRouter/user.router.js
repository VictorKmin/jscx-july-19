const router = require('express').Router();

const {user: userMiddleware, checkAccessTokenMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', user.createUser);
router.get('/:user_id/houses', user.getUserWHouseById);
router.get('/:user_id', userMiddleware.isUserPresentMiddleware, user.getById);
router.get('/', user.findAll);
router.put('/:user_id', checkAccessTokenMiddleware, user.updateUser);

module.exports = router;


// https://stackoverflow.com/questions/48854066/missing-credentials-for-plain-nodemailer/58419037#58419037
