const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const brandModel = require("../brand/brand.model");
const categoryModel = require("../category/category.model");
const orderModel = require("../orders/order.model");
const ProductModel = require("../product/product.model");
const settingsModel = require("../settings/settings.model");
const PageModel = require("../webpage/webpage.model");

module.exports = {
    getHomePageService,
    getSettingService,
    getCategoryService,
    getPageService,
    getProductService,
    searchProductService,
    compareProductService,
    getOrderService,
    trackOrderService
};

async function getHomePageService(req, res) {
  try {
    await dbConnect();
    const category = await categoryModel.find({ topCategory: true }).select({
      name: 1,
      slug: 1,
      icon: 1,
    });
    const productItemField = {
      name: 1,
      slug: 1,
      image: 1,
      unit: 1,
      unitValue: 1,
      price: 1,
      discount: 1,
      type: 1,
      variants: 1,
      quantity: 1,
      date: 1,
      review: 1,
    };
    const trending = await ProductModel.find({ trending: true }).select(
      productItemField
    );
    const newProduct = await ProductModel.find({ new: true }).select(
      productItemField
    );
    const brand = await brandModel.find({ topBrand: true });
    const bestSelling = await ProductModel.find({
      bestSelling: true,
    }).select(productItemField);
    const page = await PageModel.findOne({}).select("homePage");
    const settings = await settingsModel.findOne({});
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    res.status(200).json({
      success: true,
      category: category,
      additional: page,
      trending,
      newProduct,
      bestSelling,
      brand,
      settings,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function getSettingService(req, res) {
  try {
    await dbConnect();
    const settings = await settingsModel.findOne({}).select({
      _id: 0,
      __v: 0,
      headerCustomScript: 0,
      footerCustomScript: 0,
    });
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    res.status(200).json({ success: true, settings });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function getCategoryService(req, res) {
  try {
    await dbConnect();
    let category = [];
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    if (req.query.only_category === "true") {
      category = await categoryModel
        .find({})
        .select({
          _id: 0,
          categoryId: 1,
          name: 1,
          slug: 1,
          icon: 1,
          subCategories: 1,
          img: 1,
        })
        .limit(10);
      return res.status(200).json({ success: true, category });
    }
    category = await categoryModel.find({}).select({
      _id: 0,
      categoryId: 1,
      name: 1,
      slug: 1,
      icon: 1,
      subCategories: 1,
      img: 1,
    });
    const settings = await settingsModel.findOne({});
    res.status(200).json({ success: true, category, settings });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function getPageService(req, res) {
  try {
    await dbConnect();
    const { query } = req;
    const pageData = await PageModel.findOne({});
    const settings = await settingsModel.findOne({});
    res.setHeader("Cache-Control", "s-maxage=6000, stale-while-revalidate");
    //Check Data Scope
    switch (query.scope) {
      case "about":
        const aboutData = pageData.aboutPage;
        res.status(200).json({ success: true, page: aboutData, settings });
        break;

      case "privacy":
        const privacyData = pageData.privacyPage;
        res.status(200).json({ success: true, page: privacyData, settings });
        break;

      case "terms":
        const termsData = pageData.termsPage;
        res.status(200).json({ success: true, page: termsData, settings });
        break;

      case "return":
        const returnData = pageData.returnPolicyPage;
        res.status(200).json({ success: true, page: returnData, settings });
        break;

      case "faq":
        const faqData = pageData.faqPage;
        res.status(200).json({ success: true, page: faqData, settings });
        break;

      default:
        return res.status(400).json({ success: false });
        break;
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function getProductService(req, res) {
    const pif = {
        name: 1,
        slug: 1,
        image: 1,
        unit: 1,
        unitValue: 1,
        price: 1,
        discount: 1,
        type: 1,
        variants: 1,
        quantity: 1,
        date: 1,
        review: 1,
      };
      
    try {
        await dbConnect();
        const { type } = req.query;
        const arg =
          type === "trending"
            ? { trending: true }
            : type === "new"
            ? { new: true }
            : type === "bestselling"
            ? { bestSelling: true }
            : {};
        if (arg) {
          const data = await ProductModel.find(arg).select(pif).limit(30);
          res.setHeader(
            "Cache-Control",
            "s-maxage=300, stale-while-revalidate"
          );
          res.status(200).json({
            success: true,
            products: data,
          });
        } else {
          throw new Error("illigal request");
        }
      } catch (err) {
        console.log(err.message);
        res.status(400).json({ success: false });
      } 
}
async function searchProductService(req, res) {
    try {
        const product = await ProductModel.find({}).select({
          name: 1,
          slug: 1,
          _id: 0,
          price: 1,
          discount: 1,
          image: 1,
          unit: 1,
          unitValue: 1,
        });
        res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
        res.status(200).json({
          success: true,
          product,
        });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
}
async function compareProductService(req, res) {
    const productItemField = {
        name: 1,
        slug: 1,
        image: 1,
        unit: 1,
        unitValue: 1,
        price: 1,
        discount: 1,
        shortDescription: 1,
        date: 1,
        type: 1,
        variants: 1,
        colors: 1,
        quantity: 1,
      };
     
      
    try {
        const ids = req.body.idList;
        const data = await ProductModel
          .find()
          .where("_id")
          .in(ids)
          .select(productItemField)
          .exec();
        res.status(200).json({ success: true, data });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
}
async function getOrderService(req, res) {
    try {
        await dbConnect();
        const id = req.query.id;
        const order = await orderModel.findById(id);
        res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
        res.status(200).json({ success: true, order });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
}
async function trackOrderService(req, res) {
    try {
        const id = req.query.id;
        const order = await orderModel
          .findOne({ orderId: id })
          .select("-_id")
          .lean();
        res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
        res.status(200).json({ success: true, order });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}
