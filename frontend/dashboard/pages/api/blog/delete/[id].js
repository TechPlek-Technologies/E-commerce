import s3DeleteFiles from "~/lib/s3Delete";
import sessionChecker from "~/lib/sessionPermission";
import BlogModel from "../../../../models/blogs";
import dbConnect from "../../../../utils/dbConnect";

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "blog")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        const { id } = req.query;
        const blog = await BlogModel.findById(id);
        const fileList = [
          ...blog.seo.image,
        ];
        const fileNameList = [];
        await fileList.map((item) => fileNameList.push({ Key: item.name }));
        await s3DeleteFiles(fileNameList);
        await blog.remove();
        res.json({ success: true });
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
