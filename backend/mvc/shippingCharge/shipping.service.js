const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const shippingModel = require("./shipping.model");

module.exports = {
  getShippingService,
  postShippingService,
  updateShippingService,
  deleteShippingService
};

async function getShippingService(req, res) {
  try {
    
    const shipping = await shippingModel.findOne({});
    console.log(shipping);
    res.status(200).json({ success: true, shippingCharge: shipping });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}

async function postShippingService(req, res) {
  try {
    
    const { query, body } = req;
    let shippingData = await shippingModel.findOne({});
    if (shippingData === null) {
      shippingData = new shippingModel({ area: [] });
    }
    //Check Data Scope
    switch (query.scope) {
      case "area":
        const areaData = {
          name: body.areaName,
          price: body.areaCost,
        };
        shippingData.area.push(areaData);
        await shippingData.save();
        break;

      case "international":
        shippingData.internationalCost = body.amount;
        await shippingData.save();
        break;

      default:
        return res.status(400).json({ success: false });
        break;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function updateShippingService(req, res) {
  try {
    
    const bodyData = req.body;
    const result = await shippingModel.findOneAndUpdate(
      { "area._id": bodyData.id },
      {
        $set: {
          "area.$.name": bodyData.name,
          "area.$.price": bodyData.cost,
        },
      },
      { new: true }
    );

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Area not found" });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function deleteShippingService(req, res) {
  try {
    
    await shippingModel.updateOne(
      {},
      { $pull: { area: { _id: req.body.id } } },
      { safe: true }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
