const customId = require("custom-id-new");
const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const { convertToSlug, deleteFiles } = require("../../utils/functions");
const { Types } = require("mongoose");
const ProductModel = require("./product.model");
const categoryModel = require("../category/category.model");
const attributesModel = require("../attributes/attributes.model");
const colorsModel = require("../colors/colors.model");
const brandModel = require("../brand/brand.model");
const { parseFormMultiple } = require("../../utils/parseForm");
const notificationModel = require("../notification/notification.model");

module.exports = {
  getProductService,
  cloneProductService,
  deleteProductService,
  getProductHelperService,
  createProductService,
  editProductHelperService,
  editProductService,
  getRelatedProductService,
  postProductQuestionService,
  answerProductQuestionService
};

async function getProductService(req, res) {
  try {
    
    const product = await ProductModel.find({}).sort("-date").exec();
    res.status(200).json({ success: true, product });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function cloneProductService(req, res) {
  try {
    
    const originalDocument = await ProductModel.findById(req.body.id);
    if (!originalDocument) {
      throw new Error("Original document not found.");
    }
    const clonedDocument = new ProductModel(originalDocument.toObject());
    clonedDocument._id = new Types.ObjectId();
    clonedDocument.name = `Clone ${clonedDocument.name}`;
    clonedDocument.slug = convertToSlug(`${clonedDocument.name} clone`, true);
    clonedDocument.date = Date.now();
    clonedDocument.productId =
      "P" + customIdNew({ randomLength: 4, upperCase: true });
    await clonedDocument.save();

    res
      .status(200)
      .json({ success: true, message: "Product Successfully Cloned" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  } 
}
async function deleteProductService(req, res) {
  try {
    
    const { id } = req.query;
    const product = await ProductModel.findById(id);
    const fileList = [
      ...product.image,
      ...product.gallery,
      ...product.seo.image,
    ];
    const fileNameList = [];
    await fileList.map((item) => fileNameList.push({ Key: item.name }));
    await deleteFiles(fileNameList);
    await ProductModel.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function getProductHelperService(req, res) {
  try {
    
    const category = await categoryModel.find({});
    const attribute = await attributesModel.find({});
    const color = await colorsModel.find({});
    const brand = await brandModel.find({});
    res.status(200).json({ success: true, category, attribute, color, brand });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function createProductService(req, res) {
  try {
    
    const data = await parseFormMultiple(req);
    const {
      name,
      unit,
      unit_val,
      main_price,
      sale_price,
      description,
      short_description,
      type,
      category,
      subcategory,
      brand,
      qty,
      trending,
      new_product,
      best_selling,
      sku,
      color,
      attribute,
      selectedAttribute,
      variant,
      displayImage,
      galleryImages,
      seo,
      childCategory,
      vat,
      tax,
    } = data.field;
    const random = "P" + customId({ randomLength: 4, upperCase: true });
    const categories = JSON.parse(category);
    const subcategories = JSON.parse(subcategory);
    const childCategories = JSON.parse(childCategory);
    const image = JSON.parse(displayImage);
    const gallery = JSON.parse(galleryImages);
    const colors = JSON.parse(color);
    const attributes = JSON.parse(attribute);
    const variants = JSON.parse(variant);
    const seoData = JSON.parse(seo);
    const discount = (main_price - (sale_price / 100) * main_price).toFixed(
      1
    );

    let productData = {
      name: name.trim(),
      slug: convertToSlug(name, true),
      productId: random,
      unit: unit.trim(),
      unitValue: unit_val.trim(),
      price: main_price,
      discount,
      shortDescription: short_description.trim(),
      description,
      type,
      image,
      gallery,
      categories,
      subcategories,
      childCategories,
      brand: brand.trim(),
      trending: trending ? true : false,
      new: new_product ? true : false,
      bestSelling: best_selling ? true : false,
      seo: seoData,
      tax,
      vat,
    };
    if (type === "simple") {
      productData.quantity = qty;
      productData.sku = sku;
    } else {
      productData.colors = colors;
      productData.attributes = attributes;
      productData.variants = variants;
      productData.attributeIndex = selectedAttribute;
    }
    await ProductModel.create(productData);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
}
async function editProductHelperService(req, res) {
  try {
    
    const { slug } = req.query;
    const product = await ProductModel.findOne({ slug: slug });
    const category = await categoryModel.find({});
    const attribute = await attributesModel.find({});
    const color = await colorsModel.find({});
    const brand = await brandModel.find({});
    res
      .status(200)
      .json({ success: true, product, category, attribute, color, brand });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function editProductService(req, res) {
  try {
    
    const data = await parseFormMultiple(req);
    const {
      name,
      unit,
      unit_val,
      sale_price,
      description,
      short_description,
      type,
      category,
      subcategory,
      brand,
      qty,
      trending,
      new_product,
      best_selling,
      sku,
      color,
      main_price,
      attribute,
      selectedAttribute,
      variant,
      pid,
      displayImage,
      galleryImages,
      seo,
      childCategory,
      vat,
      tax,
    } = data.field;
    const categories = JSON.parse(category);
    const subcategories = JSON.parse(subcategory);
    const childCategories = JSON.parse(childCategory);
    const image = JSON.parse(displayImage);
    const gallery = JSON.parse(galleryImages);
    const colors = JSON.parse(color);
    const attributes = JSON.parse(attribute);
    const variants = JSON.parse(variant);
    const seoData = JSON.parse(seo);
    const discount = (main_price - (sale_price / 100) * main_price).toFixed(
      1
    );
    let productData = {
      name: name.trim(),
      unit: unit.trim(),
      unitValue: unit_val.trim(),
      price: main_price,
      discount,
      shortDescription: short_description.trim(),
      description,
      type,
      image,
      gallery,
      categories,
      subcategories,
      childCategories,
      brand: brand.trim(),
      trending: trending ? true : false,
      new: new_product ? true : false,
      bestSelling: best_selling ? true : false,
      seo: seoData,
      tax,
      vat,
    };
    if (type === "simple") {
      productData.quantity = qty;
      productData.sku = sku;
    } else {
      productData.colors = colors;
      productData.attributes = attributes;
      productData.variants = variants;
      productData.attributeIndex = selectedAttribute;
    }

    await ProductModel.findByIdAndUpdate(pid, productData);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function getRelatedProductService(req, res) {
  try {
    
    const { slug, relatedProduct } = req.query;
    // const settings = await SettingModel.findOne({});
    const product = await ProductModel.findOne({ slug: slug });
    if (relatedProduct === "true" && product) {
      const related = await ProductModel.find({
        categories: product.categories,
      }).limit(8);
      res.status(200).json({ success: true, product, related, });
    } else {
      res.status(200).json({ success: true, product });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function postProductQuestionService(req, res) {
  try {
    
    const { pid, question,session } = req.body;
    const _data = {
      userName: session.user.name,
      email: session.user.email,
      question,
    };
    const product = await productModel.findByIdAndUpdate(pid, {
      $push: { question: _data },
    });
    const message = `<p>${session.user.name} asked a question about the product (<a href="/product/${product.slug}" target="_blank">${product.name}</a>)</p>`;
    await notificationModel.create({ message });
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } 
}
async function answerProductQuestionService(req, res) {
  try {
    
    const { id, pid, answer,session } = req.body;
    if (!session.user.a)
      return res
        .status(403)
        .json({ success: false, message: "Access Forbidden" });

    await ProductModel.findOneAndUpdate(
      { _id: pid, "question._id": id },
      {
        $set: { "question.$.answer": answer },
      },
    );
    res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(200).json({ success: false });
  } 
}

