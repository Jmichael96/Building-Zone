module.exports = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        return next();
    } else {
        next();
    } 
}