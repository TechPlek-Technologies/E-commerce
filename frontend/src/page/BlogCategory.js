import React, { Fragment} from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import BlogInner from "../wrappers/BlogInner";
import BlogBanner from "../wrappers/BlogBanner";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogCategory = () => {

  const { blogData } = useSelector((store) => store.blog);
//  console.log("blog",blogData);
let { category } = useParams();
const desiredCategory = blogData.blogs.filter(
    (blog) => blog?.category === category
  );

  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
        <BlogBanner pageName={"Blogs"} />

        <BlogInner data={desiredCategory} category={blogData?.categories} />
      </LayoutOne>
    </Fragment>
  );
};

export default BlogCategory;
