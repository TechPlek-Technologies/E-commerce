import React, { Fragment} from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import BlogInner from "../wrappers/BlogInner";
import BlogBanner from "../wrappers/BlogBanner";
import { useSelector } from "react-redux";

const Blog = () => {

  const { blogData } = useSelector((store) => store.blog);

console.log(blogData);
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
