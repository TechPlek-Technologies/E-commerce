const bcrypt = require("bcryptjs");
const userModel = require("../user.model");
const { parseForm } = require("../../../utils/parseForm");
const jwt = require("jsonwebtoken");
const CustomError = require("../../../error/custom-error");

module.exports = {
  authenticateUser,
  registerUser,
};

const authSecret=process.env.AUTH_SECRET;

async function authenticateUser({ username, password }) {
  
  const userData = await userModel.findOne({ email: username });

  if (!userData || !(await bcrypt.compare(password, userData.hash))) {
    throw new Error("Username or password is incorrect");
  }

  console.log(userData);
  const token = jwt.sign({
    id: userData.id,
    name: userData.name,
    email: userData.email,
    a: userData.isAdmin ? userData.isAdmin : false,
    s:
    userData.isStaff && userData.isStaff.status
        ? userData.isStaff
        : { status: false },
  }, authSecret, { expiresIn: 3 * 60 * 60 });
  return {token};
}

async function registerUser(req) {
  
  // const data = await parseForm(req);
  const { name, email, password,isAdmin,secretKey } = req;
 
  if (isAdmin) {
    if (secretKey !== authSecret) {
      throw new CustomError("Unauthorized", 401);
    }
  }
 
  const salt = await bcrypt.genSalt(6);
  const hash = await bcrypt.hash(password, salt);
  const userData = { name, email, hash, salt,isAdmin };
  await userModel.create(userData);
}
