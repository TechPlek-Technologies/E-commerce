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

  module.exports = verifyToken;