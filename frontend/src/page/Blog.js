import React, { Fragment, useEffect, useState } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import BlogInner from "../wrappers/BlogInner";
import BlogBanner from "../wrappers/BlogBanner";
import axios from "axios";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      const domain = process.env.REACT_APP_URL;
      try {
        const response = await axios.get(`${domain}/blogs`);
        console.log("response", response.data);

        if (response.data.success) {
            setBlogs(response.data.blogs)
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
        <BlogBanner pageName={"Blogs"} />

        <BlogInner data={blogs} />
      </LayoutOne>
    </Fragment>
  );
};

export default Blog;
