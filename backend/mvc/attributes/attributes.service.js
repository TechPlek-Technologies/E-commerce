const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const attrModel = require("./attributes.model");

module.exports = {
  getAttributeByIdService,
  getAttributeService,
  postAttributeService,
  updateAttributeService,
  deleteAttributeService
};

async function getAttributeByIdService(req, res) {
  try {
    
    const id = req.query.id;
    const attr = await attrModel.findById(id);
    res.status(200).json({ success: true, attr });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function getAttributeService(req, res) {
  try {
    
    const attributes = await attrModel.find({});
    res.status(200).json({ success: true, attributes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function postAttributeService(req, res) {
  try {
    
    const body = req.body;
    const values = body.value;
    const attr = { name: body.name, values };
    await attrModel.create(attr);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function updateAttributeService(req, res) {
  try {
    
    const body = req.body;
    const id = body.id;
    const values =body.value;
    const attr = { name: body.name, values };
    await attrModel.findByIdAndUpdate(id, attr);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function deleteAttributeService(req, res) {
  try {
    
    const id = req.query.id;
    await attrModel.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
