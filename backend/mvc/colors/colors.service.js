const colorModel = require("./colors.model");

module.exports = {
  getColorService,
  postColorService,
  updateColorService,
  deleteColorService
};

async function getColorService(req, res) {
    try {
       
        const colors = await colorModel.find({}).sort("-_id");
        res.status(200).json({ success: true, colors });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}
async function postColorService(req, res) {
  try {
    
    const body = req.body;
    const color = {
        name: body.name.trim(),
        value: body.value.trim(),
      };
      await colorModel.create(color);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function updateColorService(req, res) {
  try {
    
    const body = req.body;
    const id = body.id;
    const color = { name: body.name, value: body.value };
    await colorModel.findByIdAndUpdate(id, color);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function deleteColorService(req, res) {
  try {
    
    const id = req.query.id;
    await colorModel.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
