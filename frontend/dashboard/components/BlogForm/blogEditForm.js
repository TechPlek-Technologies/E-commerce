import DefaultErrorPage from "next/error";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { fetchData, postData } from "~/lib/clientFunctions";
import FileUpload from "../FileUpload/fileUpload";
import TextEditor from "../TextEditor";
import LoadingButton from "../Ui/Button";
import Spinner from "../Ui/Spinner";
import classes from "./blogForm.module.css";
import { useTranslation } from "react-i18next";

const BlogEditForm = (props) => {
  const url = `/api/blog/edit?slug=${props.slug}`;
  const { data, error } = useSWR(url, fetchData);

  const seo_title = useRef("");
  const seo_desc = useRef("");
  const [seoImage, setSeoImage] = useState([]);
  const [editorState, setEditorState] = useState("");
  const [buttonState, setButtonState] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    if (data && data.blog) {
      setSeoImage(data.blog.seo.image);
      setEditorState(data.blog.description);
    }
  }, [data]);


  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  if (!data.blog) return <DefaultErrorPage statusCode={404} />;

  const updatedValueCb = (data) => {
    setEditorState(data);
  };

  const getEditorStateData = (editorData) => {
    const regex = /(<([^>]+)>)/gi;
    const data = !!editorData.replace(regex, "").length ? editorData : "";
    return data;
  };


  const formHandler = async (e) => {
    e.preventDefault();
    setButtonState("loading");
    const form = document.querySelector("#blog_form");
    const formData = new FormData(form);
    const seo = {
      title: seo_title.current.value.trim(),
      description: seo_desc.current.value.trim(),
      image: seoImage,
    };
    formData.append("seo", JSON.stringify(seo));
    formData.append("description", getEditorStateData(editorState));
    await postData("/api/blog/edit", formData)
      .then((status) =>
        status.success
          ? toast.success("Blog Updated Successfully")
          : toast.error("Something Went Wrong")
      )
      .catch((err) => {
        console.log(err);
        toast.error(`Something Went Wrong ${err.message}`);
      });
    setButtonState("");
  };

  return (
    <form
      id="blog_form"
      encType="multipart/form-data"
      onSubmit={formHandler}
    >
      <div className="row">
        <div className="col-lg-12">
          {blogInformation()}
          {blogDescription()}
          {seoInput()}
        </div>
       
      </div>
      <input type="hidden" name="pid" defaultValue={data.blog._id} />

      <div className="py-3">
        <LoadingButton
          type="submit"
          text={t("Update Blog")}
          state={buttonState}
        />
      </div>
    </form>
  );

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
              className={classes.input + " form-control"}
              name="short_description"
              defaultValue={data.blog.shortDescription}
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






  function blogInformation() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold text-center">
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
              className={classes.input + " form-control"}
              name="name"
              defaultValue={data.blog.name}
              required
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
              defaultValue={data.blog.seo.title}
            />
          </div>
          <div className="py-3">
            <label htmlFor="inp-222" className="form-label">
              {t("Meta Description")}
            </label>
            <textarea
              ref={seo_desc}
              id="inp-222"
              className="form-control"
              defaultValue={data.blog.seo.description}
            />
          </div>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label={t("Meta Image")}
            maxFileSizeInBytes={2000000}
            updateFilesCb={setSeoImage}
            preSelectedFiles={data.blog.seo.image}
          />
        </div>
      </div>
    );
  }
};

export default BlogEditForm;
