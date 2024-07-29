const verifyUsername = (req, res, next) => {
    const username = req.body.uname;
    if(username != 'qwerty') return res.status(401).send('Invalid credentials');
    next();
}

module.exports = { verifyUsername }