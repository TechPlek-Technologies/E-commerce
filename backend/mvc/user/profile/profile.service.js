const bcrypt = require("bcryptjs");
const { dbConnect, dbDisconnect } = require("../../../utils/dbConnect");
const userModel = require("../user.model");

module.exports = {
  updateProfile,
  getProfileData
};


const removedItem = [
  "-hash",
  "-salt",
  "-isAdmin",
  "-resetPasswordExpires",
  "-resetPasswordToken",
  "-__v",
  "-createdAt",
  "-updatedAt",
  "-isStaff",
  "-emailVerified",
  "-confirmationCode",
  "-notification",
];



async function updateProfile(req, res) {
 
  try {
    
    const { query, body } = req;
    const bodyData = body.data;
    console.log(bodyData);
    const userData = await userModel.findById(query.id);
    if (!userData) {
      return res.status(400).json({ success: false });
    }
    switch (query.scope) {
      case "info":
        userData.name = bodyData.name;
        userData.email = bodyData.email;
        userData.phone = bodyData.phone;
        userData.house = bodyData.house;
        userData.city = bodyData.city;
        userData.state = bodyData.state;
        userData.zipCode = bodyData.zipCode;
        userData.country = bodyData.country;
        await userData.save();
        break;

      case "password":
        const salt = await bcrypt.genSalt(6);
        const hash = await bcrypt.hash(bodyData.password, salt);
        userData.salt = salt;
        userData.hash = hash;
        await userData.save();
        break;

      default:
        return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    if (err && err.code === 11000) {
      return res.status(400).json({ success: false, duplicate: true });
    }
    res.status(400).json({ success: false });
  } 
}
async function getProfileData(req, res) {
 
  try {
    
    const scope = req.query.scope;
    let userData = {};
    switch (scope) {
      case "orders":
        userData = await userModel.findById(req.query.id)
          .select([
            ...removedItem,
            "-wallet",
            "-favorite",
            "-address",
            "-refundRequest",
          ])
          .populate(
            "orders",
            {
              _id: 0,
              __V: 0,
              new: 0,
              user: 0,
            },
            null,
            { sort: { orderDate: -1 } }
          );
        break;

      case "favorite":
        userData = await userModel.findById(req.query.id)
          .select([
            ...removedItem,
            "-orders",
            "-address",
            "-wallet",
            "-refundRequest",
            "-bankInfo",
          ])
          .populate("favorite")
          .exec();
        break;

      case "refund":
        userData = await userModel.findById(req.query.id)
          .select([
            ...removedItem,
            "-orders",
            "-address",
            "-wallet",
            "-favorite",
            "-bankInfo",
          ])
          .populate("refundRequest", {}, null, { sort: { _id: -1 } })
          .exec();
        break;

      default:
        userData = await userModel.findById(req.query.id)
          .select(removedItem)
          .exec();
        break;
    }
    res.status(200).json({ success: true, user: userData });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
