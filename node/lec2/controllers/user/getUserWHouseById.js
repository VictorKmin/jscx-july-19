const dataBase = require('../../dataBase').getInstance();
const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;
        const HouseModel = await dataBase.getModel('House');

        const houses = await HouseModel.findAll({
            where: {
                user_id
            }
        });

        const user = await userService.getById(user_id);

        user.houses = houses;

        res.json(user)
    } catch (e) {
        res.json(e.message)
    }
}
