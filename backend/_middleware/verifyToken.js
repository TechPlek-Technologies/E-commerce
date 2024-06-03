const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token =  req.cookies.token;
    if (!token) return res.status(403).send('Access denied.');
  
    try {
      const decoded = jwt.verify(token, process.env.AUTH_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).send('Invalid token.');
    }
  };
const verifyRequest = (req, res, next) => {
  console.log(req.body)
    const isAdmin =  req.body.user.a;
    if (!isAdmin) return res.status(403).send('Access denied.');
  
    try {
      req.user = req.body.user;
      next();
    } catch (err) {
      res.status(400).send('Invalid token.');
    }
  };

  module.exports = {verifyToken,verifyRequest};