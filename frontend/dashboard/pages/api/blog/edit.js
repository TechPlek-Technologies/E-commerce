import sessionChecker from "~/lib/sessionPermission";
import BlogModel from "../../../models/blogs";
import dbConnect from "../../../utils/dbConnect";
import { parseFormMultiple } from "../../../utils/parseForm";

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
        const { slug } = req.query;
        const blog = await BlogModel.findOne({ slug: slug });
        res
          .status(200)
          .json({ success: true, blog });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const data = await parseFormMultiple(req);
        const {
          pid,
          name,
          description,
          short_description,
          seo,
        } = data.field;
       
        const seoData = JSON.parse(seo);
      
        let blogData = {
          name: name.trim(),
          shortDescription: short_description.trim(),
          description,
          seo: seoData,
        };
     
        await BlogModel.findByIdAndUpdate(pid, blogData);

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
