import dynamic from "next/dynamic";
import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import useSWR from "swr";
import classes from "~/components/ProductForm/productForm.module.css";
import { fetchData, postData } from "~/lib/clientFunctions";

const Spinner = dynamic(() => import("~/components/Ui/Spinner"));
const LoadingButton = dynamic(() => import("~/components/Ui/Button"));

const EditCategory = () => {
  const router = useRouter();
  const url = `/api/blog/category/edit?id=${router.query.id}`;
  const { data, error } = useSWR(router.query.id ? url : null, fetchData);
  const name = useRef(null);
  const [categoryData, setCategoryData] = useState({});
  const [buttonState, setButtonState] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    if (data && data.category) {
      setCategoryData(data.category);
    }
  }, [data]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      
      setButtonState("loading");
      const formData = {
        id: categoryData._id,
        name: name.current.value,
      };

      const response = await postData("/api/blog/category/edit", formData);
      response.success
        ? toast.success("Category Updated Successfully")
        : toast.error("Something Went Wrong");
      setButtonState("");
    } catch (err) {
      setButtonState("");
      toast.error(`Something Went Wrong ${err.message}`);
    }
  };

  return (
    <>
      {error ? (
        <DefaultErrorPage statusCode={500} />
      ) : !data ? (
        <Spinner />
      ) : !categoryData._id ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <div>
          <h4 className="text-center pt-3 pb-5">
            {t("Edit Blog Category")} ({categoryData.name})
          </h4>
          <form id="category_form" onSubmit={submitHandler}>
            <input type="hidden" name="id" defaultValue={categoryData._id} />
            <div className="mb-5">
              <label htmlFor="inp-1" className="form-label">
                {t("name")}*
              </label>
              <input
                type="text"
                id="inp-1"
                className={classes.input + " form-control"}
                ref={name}
                defaultValue={categoryData.name}
                required
              />
            </div>
            <div className="mb-4">
              <LoadingButton
                type="submit"
                text="Update Category"
                state={buttonState}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

EditCategory.requireAuthAdmin = true;
EditCategory.dashboard = true;

export default EditCategory;
