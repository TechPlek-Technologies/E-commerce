import { PencilSquare, Trash, Files } from "@styled-icons/bootstrap";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSWR from "swr";
import classes from "~/components/tableFilter/table.module.css";
import { cpf, deleteData, fetchData, updateData } from "~/lib/clientFunctions";

const DataTable = dynamic(() => import("react-data-table-component"));
const FilterComponent = dynamic(() => import("~/components/tableFilter"));
const GlobalModal = dynamic(() => import("~/components/Ui/Modal/modal"));
const Spinner = dynamic(() => import("~/components/Ui/Spinner"));
const Link = dynamic(() => import("next/link"));

const BlogList = () => {
  const url = `/api/blog`;
  const { data, error, mutate } = useSWR(url, fetchData);
  console.warn(data)
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    if (data && data.blog) {
      setBlogList(data.blog);
    }
  }, [data]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState("");
  const { t } = useTranslation();
  const { session } = useSelector((state) => state.localSession);
  const [permissions, setPermissions] = useState({});
  useEffect(() => {
    setPermissions(cpf(session, "blog"));
  }, [session]);

  const openModal = (id) => {
    setSelectedBlog(id);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteProduct = async () => {
    setIsOpen(false);
    await deleteData(`/api/blog/delete/${selectedBlog}`)
      .then((data) =>
        data.success
          ? (toast.success("Blog Deleted Successfully"), mutate())
          : toast.error("Something Went Wrong")
      )
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
  };

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = blogList.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  async function cloneDoc(id) {
    try {
      const resp = await updateData("/api/blog", { id });
      resp.success
        ? (toast.success(resp.message), mutate())
        : toast.error(resp.message);
    } catch (err) {
      console.log(err.message);
    }
  }

  const columns = [
    {
      name: t("Id"),
      selector: (row) => row.blogId,
    },
    {
      name: t("name"),
      selector: (row) => <span title={row.name}>{row.name}</span>,
      sortable: true,
    },
    {
      name: t("Short Description"),
      selector: (row) => row.shortDescription,
      sortable: true,
    },
    {
      name: t("action"),
      selector: (row) => (
        <div>
          {permissions.delete && (
            <div className={classes.button} onClick={() => openModal(row._id)}>
              <Trash width={22} height={22} title="DELETE" />
            </div>
          )}
          {permissions.edit && (
            <Link href={`/dashboard/blog/${row.slug}`}>
              <div className={classes.button}>
                <PencilSquare width={22} height={22} title="EDIT" />
              </div>
            </Link>
          )}
          {permissions.edit && (
            <div className={classes.button} onClick={() => cloneDoc(row._id)}>
              <Files width={22} height={22} title="CLONE" />
            </div>
          )}
        </div>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "92px",
        fontSize: "15px",
      },
    },
    headCells: {
      style: {
        fontSize: "15px",
      },
    },
  };

  return (
    <>
      {error ? (
        <div className="text-center text-danger">failed to load</div>
      ) : !data ? (
        <Spinner />
      ) : (
        <div>
          <h4 className="text-center pt-3 pb-5">Blogs</h4>
          <div className={classes.container}>
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              customStyles={customStyles}
            />
            <GlobalModal
              isOpen={isOpen}
              handleCloseModal={closeModal}
              small={true}
            >
              <div className={classes.modal_icon}>
                <Trash width={90} height={90} />
                <p>Are you sure, you want to delete?</p>
                <div>
                  <button
                    className={classes.danger_button}
                    onClick={() => deleteProduct()}
                  >
                    Delete
                  </button>
                  <button
                    className={classes.success_button}
                    onClick={() => closeModal()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </GlobalModal>
          </div>
        </div>
      )}
    </>
  );
};

BlogList.requireAuthAdmin = true;
BlogList.dashboard = true;

export default BlogList;
