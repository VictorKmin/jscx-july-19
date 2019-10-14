const {tokenVerificator} = require('../helpers');

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            throw new Error('NO TOKEN')
        }

        const userFromToken = tokenVerificator(token);

        req.user = userFromToken;

        next();
    } catch (e) {
        res.status(403).json(e.message)
    }
}
