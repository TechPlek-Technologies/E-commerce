import { useSelector } from 'react-redux';

// Custom hook to get a specific setting
export const useHome = (key) => {
    const { settingsData,loaded } = useSelector((state) => state.settings);

  
    if(!loaded){
      return null;
    }
  return settingsData.additional[key];
  };

  export const useCategory = (key) => {

    const { settingsData,loaded } = useSelector((state) => state.settings);

  
    if(!loaded){
      return null;
    }
  return settingsData[key];
  };
  
export const useAllHomeData = () => {
    const { settingsData,loaded } = useSelector((state) => state.settings);
  
    if(!loaded){
      return null;
    }
  return settingsData;
  };
  


