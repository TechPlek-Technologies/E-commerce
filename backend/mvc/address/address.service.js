const { default: xss } = require("xss");
const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const userModel = require("../user/user.model");

module.exports = {
   getAddressService,
    postAddressService,

};

async function getAddressService(req, res) {
    try {
        
        const {id} =req.query;
        const user = await userModel.findById(id)
          .populate(
            "address",
            {
              __v: 0,
              user: 0,
              orders: 0,
            },
            null,
            { sort: { _id: -1 } }
          )
          .select({ address: 1 });
        res.status(200).json({ success: true, user });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}
async function postAddressService(req, res) {
    try {
        const body = req.body;
        const {id} =req.query;
        let obj = {};
        for (const x in body) {
          if (Object.hasOwnProperty.call(body, x)) {
            const el = body[x];
            const cleanData = xss(el);
            obj[x] = cleanData;
          }
        }
        const r = await userModel.updateOne({ _id: id }, obj);
        res.status(200).json({
          success: r.modifiedCount && r.modifiedCount === 1 ? true : false,
        });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      } 
}
