module.exports = (req, res) => {
    const user = req.user;

    res.json(user);
}
