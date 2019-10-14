const router = require('express').Router();

const dataBase = require('../../dataBase').getInstance();
const {tokinazer} = require('../../helpers');


router.post('/', async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');
        const {email, password} = req.body;

        const isUserPresent = await UserModel.findOne({
            where: {
                email,
                password
            },
            attributes: ['id']
        });

        if (!isUserPresent) {
            throw new Error('Bla bla')
        }

        const tokens = tokinazer(isUserPresent.dataValues);

        res.json(tokens)

    } catch (e) {
        res.json('BAD').status(403)
    }
});

//
// router.post('/refresh', (req, res) => {
//     const r = req.get('Aut');
//
//     regTOkVer(r);
//
//     tokinazer({newUser})
// })


module.exports = router;
