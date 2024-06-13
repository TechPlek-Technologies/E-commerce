import { model, models, Schema } from "mongoose";
import { blogCategory } from "~/utils/modelData.mjs";

const blogCategorySchema = new Schema(blogCategory);

export default models.blogCategory || model("blogCategory", blogCategorySchema);
