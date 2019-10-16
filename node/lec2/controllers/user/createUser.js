const fs = require('fs-extra');
const path = require('path');
const uuid = require('uuid').v1();

const dataBase = require('../../dataBase').getInstance();
const {emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');
        const userToCreate = req.body;
        const file = req.files.myFile;

        const createdUser = await UserModel.create(userToCreate);
        const createdUserId = createdUser && createdUser.dataValues && createdUser.dataValues.id;

        if (!createdUserId) {
            throw new Error('fdsfs')
        }

        const pathToUserAvatar = path.resolve(global.appRoot, 'static', 'files', 'user', `${createdUserId}`);

        fs.mkdirSync(pathToUserAvatar, {recursive: true});

        const fileExtension = file.name.split('.').pop();

        await file.mv(pathToUserAvatar + `/${uuid}.${fileExtension}`);

        // await emailService.sendEmail(userToCreate.email);

        res.json('CREATED')
    } catch (e) {
        res.json(e.message)
    }
}
