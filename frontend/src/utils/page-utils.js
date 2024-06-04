import { useSelector } from 'react-redux';

// Custom hook to get a specific setting
export const usePage = (key) => {
    const { pageData,loaded } = useSelector((state) => state.pages);

    if(!loaded){
      return null;
    }
  return pageData[key];
};

export const useAllPage = () => {
    const { pageData, loaded } = useSelector((state) => state.pages);
    if(!loaded){
      return null;
    }
  return pageData;
};

