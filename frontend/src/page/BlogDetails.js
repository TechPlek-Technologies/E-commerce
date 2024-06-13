import React, { Fragment} from 'react';
import SEO from '../components/Seo';
import LayoutOne from '../layouts/LayoutOne';
import BlogDetailsInner from '../wrappers/BlogDetailsInner';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

  const { blogData } = useSelector((store) => store.blog);
  const param = useParams();

  const desiredBlog = blogData.find(
    (blog) => blog?.slug === param.slug
  );

  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
      <BlogDetailsInner data={desiredBlog}/>
      </LayoutOne>
    </Fragment>
  )
}

export default BlogDetails;
