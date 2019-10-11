const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UsersModel = dataBase.getModel('User');

        const users = await UsersModel.findAll();

        res.json(users);
    } catch (e) {
        res.status(400).json(e.message);
    }
}
