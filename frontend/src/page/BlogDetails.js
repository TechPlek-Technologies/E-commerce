import React, { Fragment, useEffect, useState } from 'react';
import SEO from '../components/Seo';
import LayoutOne from '../layouts/LayoutOne';
import BlogDetailsInner from '../wrappers/BlogDetailsInner';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

const params = useParams();
console.log(params.slug);
  return (
    <Fragment>
      <SEO titleTemplate="Blog" />

      <LayoutOne>
      {/* <BlogDetailsInner data={blogs}/> */}
      </LayoutOne>
    </Fragment>
  )
}

export default BlogDetails;
