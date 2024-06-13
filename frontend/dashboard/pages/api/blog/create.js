import customId from "custom-id-new";
import sessionChecker from "~/lib/sessionPermission";
import { convertToSlug } from "../../../middleware/functions";
import BlogModel from "../../../models/blogs";
import dbConnect from "../../../utils/dbConnect";
import { parseFormMultiple } from "../../../utils/parseForm";
import categoryModel from "../../../models/blogCategory";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "blog")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const category = await categoryModel.find({});
      
        res
          .status(200)
          .json({ success: true, category});
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await parseFormMultiple(req);
        const { name, description, short_description, seo, blogImage,category } =
          data.field;
        console.log(data);
        const random = "B" + customId({ randomLength: 4, upperCase: true });
        const seoData = JSON.parse(seo);

        let blogData = {
          name: name.trim(),
          slug: convertToSlug(name, true),
          blogId: random,
          shortDescription: short_description.trim(),
          description,
          seo: seoData,
          icon: blogImage,
          category:category
        };

        await BlogModel.create(blogData);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
