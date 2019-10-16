const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const { user_id } = req.params;

        const isUserPresent = await userService.getById(user_id);

        if (!isUserPresent) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        req.user = isUserPresent;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}
