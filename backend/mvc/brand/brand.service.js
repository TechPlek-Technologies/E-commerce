const customIdNew = require("custom-id-new");
const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const brandModel = require("./brand.model");
const { convertToSlug, deleteFiles } = require("../../utils/functions");

module.exports = {
  getBrandService,
  postBrandService,
  updateBrandService,
  deleteBrandService,
  changeTopBrandService
};

async function getBrandService(req, res) {
  try {
    await dbConnect();
    const data = await brandModel.find({});
    res.status(200).json({ success: true, brand: data });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function postBrandService(req, res) {
  try {
    await dbConnect();
    const data = req.body;
    const image = data.categoryImage;
    const random = customIdNew({ randomLength: 2, lowerCase: true });

    const brandData = {
      brandId: random,
      name: data.name.trim(),
      image: image,
      slug: convertToSlug(data.name, false),
    };
    await brandModel.create(brandData);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function updateBrandService(req, res) {
  try {
    await dbConnect();
    const data = req.body;
    const brandData = {
      name: data.name.trim(),
      image: data.image,
    };
    await brandModel.findByIdAndUpdate(data.id, brandData);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function deleteBrandService(req, res) {
  try {
    await dbConnect();
    const id=req.query.id;
    const data = await brandModel.findById(id);
    const icon = [{ Key: data.image[0]?.name }];
    await deleteFiles(icon);
    await brandModel.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function changeTopBrandService(req, res) {
  try {
    await dbConnect();
    const { id } = req.body;
    const brand = await brandModel.findById(id);
    console.log(brand);
    brand.topBrand = !brand.topBrand;
    await brandModel.findByIdAndUpdate(id, brand);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
