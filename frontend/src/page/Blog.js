import React, { Fragment, useEffect, useState } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import BlogInner from "../wrappers/BlogInner";
import BlogBanner from "../wrappers/BlogBanner";
import { useSelector } from "react-redux";

const Blog = () => {

  const { blogData } = useSelector((store) => store.blog);

  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
        <BlogBanner pageName={"Blogs"} />

        <BlogInner data={blogData} />
      </LayoutOne>
    </Fragment>
  );
};

export default Blog;
