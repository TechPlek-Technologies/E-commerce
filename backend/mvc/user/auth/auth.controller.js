const express = require("express");
const router = express.Router();
const userService = require("./auth.service");
const verifyToken = require("../../../_middleware/verifyToken");

router.post("/login", authenticate);
router.post("/register", register);
router.post("/logout", logout);
router.get("/session", verifyToken, session);

async function authenticate(req, res, next) {
  const { username, password } = req.body;
  try {
    const { token } = await userService.authenticateUser({
      username:username,
      password:password,
    });
    res.cookie("token", token, { maxAge: 3 * 60 * 60 * 1000 }); // 3 hours
    res.json({ success:true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function register(req, res, next) {
  try {
    await userService.registerUser(req.body);
    res.status(200).json({ success: true, message: "Registration successful" });
  } catch (err) {
    if (err && err.code == 11000) {
      console.log(err);
      res.status(200).json({ success: false, duplicate: true });
    } else if (err && err.code == 401) {
      console.log(err);
      res.status(401).json({ success: false, authorised: false });
    } else {
      console.log(err);
      res.status(400).json({ success: false, duplicate: false });
    }
  }
}

async function logout(req, res, next) {
  res.clearCookie("token");
  res.sendStatus(204);
}

async function session(req, res, next) {
  res.json({ user: req.user });
}

module.exports = router;
