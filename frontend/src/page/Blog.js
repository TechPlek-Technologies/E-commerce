import React, { Fragment, useEffect, useState} from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import BlogInner from "../wrappers/BlogInner";
import BlogBanner from "../wrappers/BlogBanner";
import { useSelector } from "react-redux";
import { useLocation} from "react-router-dom";

const Blog = () => {

  const { blogData } = useSelector((store) => store.blog);
  const [data, setData] = useState(blogData.blogs);
//  console.log("blog",blogData);
 const location = useLocation();

 // Parse the query string using URLSearchParams
 const queryParams = new URLSearchParams(location.search);
 const category = queryParams.get('query');
//  console.log("category",category);

useEffect(()=>{
  if(category){
    setData(blogData.blogs.filter(
      (blog) => blog?.category === category
    )
  )
   }
},[category])

  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
        <BlogBanner pageName={"Blogs"} />

        <BlogInner data={data} category={blogData?.categories} />
      </LayoutOne>
    </Fragment>
  );
};

export default Blog;
