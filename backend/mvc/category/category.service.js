const { convertToSlug, deleteFiles } = require("../../utils/functions");
const { parseForm } = require("../../utils/parseForm");
const categoryModel = require("../category/category.model");
const customId=require("custom-id-new");

module.exports = {
  getCategoryService,
  createCategoryService,
  deleteCategoryService,
  updateCategoryService,
  changeTopCategoryService,
  createSubCategoryService,
  deleteSubCategoryService,
  updateSubCategoryService,
  createChildCategoryService,
  deleteChildCategoryService,
  updateChildCategoryService,

};



async function getCategoryService(req, res) {
    try {
        
        const data = await categoryModel.find({});
        res.status(200).json({ success: true, category: data });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
}
async function createCategoryService(req, res) {
    try {
        
        const data = req.body;
        const image = data.categoryImage;
        const random = customId({ randomLength: 2, lowerCase: true });
        const categoryData = {
          categoryId: random,
          name: data.name.trim(),
          icon: image,
          slug: convertToSlug(data.name, false),
        };
        await categoryModel.create(categoryData);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function updateCategoryService(req, res) {
    try {
        
        const data = req.body;
        const categoryData = {
          name: data.name.trim(),
          icon: data.categoryImage,
        };
        await categoryModel.findByIdAndUpdate(data.id, categoryData);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function changeTopCategoryService(req, res) {
    try {
        
        const { id } = req.body;
        const category = await categoryModel.findById(id);
        category.topCategory = !category.topCategory;
        await categoryModel.findByIdAndUpdate(id, category);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function deleteCategoryService(req, res) {
    try {
       
        const data = await categoryModel.findById(req.query.id);
        const icon = [{ Key: data.icon[0]?.name }];
        await deleteFiles(icon);
        await categoryModel.deleteOne({ _id: req.query.id });
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function createSubCategoryService(req, res) {
    try {
      
        const data = req.body;
        const objectData = {
          name: data.name.trim(),
          slug: convertToSlug(data.name, false),
        };
        await categoryModel.findByIdAndUpdate(data.id, {
          $push: { subCategories: objectData },
        });
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function updateSubCategoryService(req, res) {
  try {
    
    const body =req.body;
    await categoryModel.findOneAndUpdate(
      { _id: body.id, "subCategories.name": body.name },
      {
        $set: { "subCategories.$": { name: body.update, slug: body.slug } },
      }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }finally{
        await dbDisconnect();
      }
 
}
async function deleteSubCategoryService(req, res) {
    try {
      
        const id = req.query.id;
        const slug = req.query.slug;
        await categoryModel.findByIdAndUpdate(id, {
          $pull: { subCategories: { slug: slug } },
        });
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function createChildCategoryService(req, res) {
    try {
      
        // const data = await parseForm(req);
        const data = req.body;
        const objectData = {
          name: data.name.trim(),
          slug: convertToSlug(data.name, false),
        };
        const r = await categoryModel.updateOne(
          {
            _id: data.categoryId,
            "subCategories._id": data.subCategoryId,
          },
          {
            $push: { "subCategories.$.child": objectData },
          }
        );
        res.status(200).json({ success: r.modifiedCount > 0 });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}
async function updateChildCategoryService(req, res) {
  try {
    
   
    const body = req.body;
    const categoryId = body.categoryId;
    const subcategoryId = body.subcategoryId;
    const slug = body.slug;
    const name = body.update;
    const r = await categoryModel.updateOne(
      {
        _id: categoryId,
      },
      {
        $set: { "subCategories.$[a].child.$[i].name": name },
      },
      {
        arrayFilters: [
          {
            "a._id": subcategoryId,
          },
          {
            "i.slug": slug,
          },
        ],
      }
    );
    res.status(200).json({ success: r.modifiedCount > 0 });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }finally{
        await dbDisconnect();
      }
 
}
async function deleteChildCategoryService(req, res) {
    try {
      
        const categoryId = req.query.categoryId;
        const subcategoryId = req.query.subcategoryId;
        const slug = req.query.slug;
        const r = await categoryModel.updateOne(
          {
            _id: categoryId,
            "subCategories._id": subcategoryId,
          },
          {
            $pull: { "subCategories.$.child": { slug: slug } },
          }
        );
        res.status(200).json({ success: r.modifiedCount > 0 });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }finally{
        await dbDisconnect();
      }
 
}