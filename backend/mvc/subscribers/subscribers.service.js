const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const subscriberModel = require("./subscribers.model");

module.exports = {
  getSubscriberService,
  createSubscriberService,
  deleteSubscriberService,
};

async function getSubscriberService(req, res) {
  try {
    
    const subscribers = await subscriberModel.findOne({});
    res.status(200).json({ success: true, subscribers: subscribers || [] });
  } catch (err) {
    res.status(500).json({ success: false });
  } 
}
async function createSubscriberService(req, res) {
  try {
    
    const email = req.body.email;
    let newsletter = await subscriberModel.findOne({});
    if (!newsletter) {
      newsletter = new subscriberModel({ subscribers: [] });
    }
    if (email.length > 0) {
      newsletter.subscribers.push({ email });
      await newsletter.save();
      res.status(201).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function deleteSubscriberService(req, res) {
  try {
    
    await subscriberModel.updateOne(
      {},
      {
        $pull: { subscribers: { _id: req.query.id } },
      }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
