import sessionChecker from "~/lib/sessionPermission";
import categoryModel from "../../../../models/blogCategory";
import { convertToSlug } from "~/middleware/functions";
import dbConnect from "~/utils/dbConnect";
import customId from "custom-id-new";

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
        const data = await categoryModel.find({});
        res.status(200).json({ success: true, category: data });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const data = req.body;
        const random = customId({ randomLength: 2, lowerCase: true });
        const categoryData = {
          categoryId: random,
          name: data.name.trim(),
          slug: convertToSlug(data.name, false),
        };
        await categoryModel.create(categoryData);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const data = await categoryModel.findById(req.query.id);
        await data.remove();
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
