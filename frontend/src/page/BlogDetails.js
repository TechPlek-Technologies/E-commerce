import React, { Fragment} from 'react';
import SEO from '../components/Seo';
import LayoutOne from '../layouts/LayoutOne';
import BlogDetailsInner from '../wrappers/BlogDetailsInner';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

  let { slug } = useParams();
  const { blogData } = useSelector((store) => store.blog);
  const desiredBlog = blogData.blogs.find(blog => blog?.slug === slug);
  // console.log("slug",slug);
  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
      <BlogDetailsInner data={desiredBlog} category={blogData.categories} blogData={blogData}/>
      </LayoutOne>
    </Fragment>
  )
}

export default BlogDetails;
