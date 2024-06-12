import { model, models, Schema } from "mongoose";
import { blogs } from "~/utils/modelData.mjs";

const blogSchema = new Schema(blogs, { versionKey: false });

export default models.blog || model("blog", blogSchema);
