const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const UserModel = dataBase.getModel('User');

        const isUserPresent = await UserModel.findOne({
            where: {
                id: user_id
            },
            attributes: ['name', 'email']
        });

        if (!isUserPresent) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        console.log(isUserPresent.dataValues);

        req.user = isUserPresent;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}
