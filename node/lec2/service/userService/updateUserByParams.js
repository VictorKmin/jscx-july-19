const dataBase = require('../../dataBase').getInstance();

module.exports = async (whereObject, updateObject) => {
    const UserModel = dataBase.getModel('User');

    await UserModel.update(updateObject, {
        where: whereObject
    })
};
