const db = require('../../dataBase').getInstance();

const userAttributes = ['id', 'email'];

module.exports = async objectToSearch => {
    const UserModel = db.getModel('User');

    const user = await UserModel.findOne({
        where: objectToSearch,
        attributes: userAttributes
    });

    return user && user.dataValues
}
