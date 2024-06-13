import {
    Check2Circle,
    PencilSquare,
    SlashCircle,
    Trash,
  } from "@styled-icons/bootstrap";
  import dynamic from "next/dynamic";
  import Link from "next/link";
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
  
  const CategoryTable = () => {
    const url = `/api/blog/category`;
    const { data, error, mutate } = useSWR(url, fetchData);
  console.log(data);
    const [categoryList, setCategoryList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { t } = useTranslation();
    useEffect(() => {
      if (data && data.category) {
        setCategoryList(data.category);
      }
    }, [data]);
  
    const { session } = useSelector((state) => state.localSession);
    const [permissions, setPermissions] = useState({});
    useEffect(() => {
      setPermissions(cpf(session, "category"));
    }, [session]);
  
    const openModal = (id) => {
      setSelectedCategory(id);
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const deleteProduct = async () => {
      setIsOpen(false);
      await deleteData(`/api/blog/category?id=${selectedCategory}`)
        .then((data) =>
          data.success
            ? (toast.success("Category Deleted Successfully"), mutate())
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
    const filteredItems = categoryList.filter(
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
  
    const columns = [
      {
        name: t("id"),
        selector: (row) => row.slug,
      },
      {
        name: t("name"),
        selector: (row) => row.name,
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
              <Link href={`/dashboard/blog/category/${row._id}`}>
                <div className={classes.button}>
                  <PencilSquare width={22} height={22} title="EDIT" />
                </div>
              </Link>
            )}
          </div>
        ),
      },
    ];
    return (
      <>
        {error ? (
          <div className="text-center text-danger">failed to load</div>
        ) : !data ? (
          <Spinner />
        ) : (
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
          </div>
        )}
        <GlobalModal isOpen={isOpen} handleCloseModal={closeModal} small={true}>
          <div className={classes.modal_icon}>
            <Trash width={80} height={80} />
            <p className="mb-1">Are you sure, you want to delete?</p>
            <small className="text-danger d-block mb-3">
              This operation is permanent
            </small>
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
      </>
    );
  };
  
  CategoryTable.requireAuthAdmin = true;
  CategoryTable.dashboard = true;
  
  export default CategoryTable;
  