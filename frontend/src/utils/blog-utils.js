import { useSelector } from 'react-redux';

// Custom hook to get a specific setting
export const useBlog = (key) => {
    const { blogData,loaded } = useSelector((store) => store.blog);

    if(!loaded){
      return null;
    }
  return blogData[key];
};

export const useAllBlog = () => {
    const { blogData, loaded } = useSelector((state) => state);
    if(!loaded){
      return null;
    }
  return blogData;
};

