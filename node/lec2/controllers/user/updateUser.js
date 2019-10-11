const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const patchUserObject = req.body;
        const {user_id} = req.params;

        // TODO patchUserObject validator
        await userService.updateUserByParams({id: user_id}, patchUserObject);
        res.json('OK')
    } catch (e) {
        res.json(e.message)
    }
}