// 1)
// User Login with email and password.
// 2)
// Check is login and password in DB is correct
// 3)
// Generate new JWT token pair
// 4)
// Insert tokens into DB
// 5)
// Return token pair to FE
const {tokinazer} = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const user = req.user;
        const tokens = tokinazer(user);

        res.json(tokens)
    } catch (e) {
        res.json('BAD').status(403)
    }
}
