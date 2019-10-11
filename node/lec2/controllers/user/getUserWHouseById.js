const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;
        const UserModel = await dataBase.getModel('User');
        const HouseModel = await dataBase.getModel('House');

        const users = await HouseModel.findAll({
            where: {
                user_id
            },
            include: [{
                model: UserModel,
                attributes: ['name', 'email', 'id']
            }]
        });

        res.json(users)
    } catch (e) {
        res.json(e.message)
    }
}