import { useRef, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { fetchData, postData } from "~/lib/clientFunctions";
import FileUpload from "../FileUpload/fileUpload";
import TextEditor from "../TextEditor";
import LoadingButton from "../Ui/Button";
import Spinner from "../Ui/Spinner";
import { useTranslation } from "react-i18next";

const BlogForm = () => {
  const url = `/api/blog/create`;
  const { data, error } = useSWR(url, fetchData);
  const seo_title = useRef("");
  const seo_desc = useRef("");
  const [seoImage, setSeoImage] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editorState, setEditorState] = useState("");
  const [buttonState, setButtonState] = useState("");
  const [resetImageInput, setResetImageInput] = useState("");
  const [blogImage, updateBlogImage] = useState([]);

  const { t } = useTranslation();

  const updatedValueCb = (data) => {
    setEditorState(data);
  };

  const getEditorStateData = (editorData) => {
    const regex = /(<([^>]+)>)/gi;
    const data = !!editorData.replace(regex, "").length ? editorData : "";
    return data;
  };

  function updateCategory(e) {
    setSelectedCategory(e.target.value);
  }

  const formHandler = async (e) => {
    e.preventDefault();
    if (!blogImage[0]) {
      return toast.warning("Please add Blog icon");
    }
    setButtonState("loading");
    const form = document.querySelector("#blog_form");
    const formData = new FormData(form);
    const seo = {
      title: seo_title.current.value.trim(),
      description: seo_desc.current.value.trim(),
      image: seoImage,
    };
    formData.append("seo", JSON.stringify(seo));
    formData.append("blogImage", JSON.stringify(blogImage));
    formData.append("description", getEditorStateData(editorState));
    formData.append("category", selectedCategory);

    await postData("/api/blog/create", formData)
      .then((status) => {
        status.success
          ? (toast.success("Blog Added Successfully"),
            form.reset(),
            setResetImageInput("reset"),
            setEditorState(""))
          : toast.error("Something Went Wrong");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
    setButtonState("");
  };

  return (
    <>
      <h4 className="text-center pt-3 pb-5">{t("Create New Blog")}</h4>
      <form id="blog_form" encType="multipart/form-data" onSubmit={formHandler}>
        <div className="row">
          <div className="col-lg-12">
            {blogInformation()}
            {blogDescription()}
            {seoInput()}
          </div>
        </div>
        <div className="my-4">
          <LoadingButton
            type="submit"
            text={t("Add Blog")}
            state={buttonState}
          />
        </div>
      </form>
    </>
  );

  function blogInformation() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("Blog Information")}
        </div>
        <div className="card-body">
          <div className="py-3">
            <label htmlFor="inp-1" className="form-label">
              {t("name")}*
            </label>
            <input
              type="text"
              id="inp-1"
              className="form-control"
              name="name"
              required
            />
          </div>
          <div className="py-3">
            <label className="form-label">{t("category")}*</label>
            <select
              className="form-select"
              onChange={updateCategory}
              defaultValue=""
              required
            >
              <option value="">Select Category</option>
              {data?.category?.map((x, i) => (
                <option key={i} value={x.slug}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 pt-2">
            <FileUpload
              accept=".jpg,.png,.jpeg"
              label={`${t("Upload your blog Thumbnail here")}*`}
              maxFileSizeInBytes={2000000}
              updateFilesCb={updateBlogImage}
            />
          </div>
        </div>
      </div>
    );
  }

  function blogDescription() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("Blog Description")}
        </div>
        <div className="card-body">
          <div className="py-3">
            <label htmlFor="inp-7" className="form-label">
              {t("Short Description")}*
            </label>
            <textarea
              id="inp-7"
              className="form-control"
              name="short_description"
            />
          </div>
          <div className="py-3">
            <label className="form-label">{t("description")}</label>
            <TextEditor
              previousValue={editorState}
              updatedValue={updatedValueCb}
              height={300}
            />
          </div>
        </div>
      </div>
    );
  }

  function seoInput() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("SEO Meta Tags")}
        </div>
        <div className="card-body">
          <div className="py-3">
            <label htmlFor="inp-122" className="form-label">
              {t("Meta Title")}
            </label>
            <input
              type="text"
              ref={seo_title}
              id="inp-122"
              className="form-control"
            />
          </div>
          <div className="py-3">
            <label htmlFor="inp-222" className="form-label">
              {t("Meta Description")}
            </label>
            <textarea ref={seo_desc} id="inp-222" className="form-control" />
          </div>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label={t("Meta Image")}
            maxFileSizeInBytes={2000000}
            updateFilesCb={setSeoImage}
            resetCb={resetImageInput}
          />
        </div>
      </div>
    );
  }
};

export default BlogForm;
