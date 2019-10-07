const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const query = `SELECT * FROM user WHERE id = ${user_id}`;
        const [isUserPresent] = await provider.promise().query(query);

        if (!isUserPresent.length) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        req.user = isUserPresent;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}
