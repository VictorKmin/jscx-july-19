const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const patchUserObject = req.body;
        const {user_id} = req.params;
        const {id} = req.user;

        if (+user_id !== id) {
            throw new Error('It not your user')
        }

        // TODO patchUserObject validator
        await userService.updateUserByParams({id: user_id}, patchUserObject);
        res.json('OK')
    } catch (e) {
        res.json(e.message)
    }
}
