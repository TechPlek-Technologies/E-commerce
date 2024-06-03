import { useSelector } from 'react-redux';

// Custom hook to get a specific setting
export const useSetting = (key) => {
    const { settingsData,loaded } = useSelector((state) => state.settings);

    if(!loaded){
      return null;
    }
  return settingsData.settings[key];
};

export const useAllSetting = () => {
    const { settingsData, loaded } = useSelector((state) => state.settings);
    if(!loaded){
      return null;
    }
  return settingsData.settings;
};

export const generateCssVariables = (settingsData) => {
    
    let cssVariables = ":root {\n";
    for (const [key, value] of Object.entries(settingsData)) {
        cssVariables += `  --${key}: ${value};\n`;
    }
    cssVariables += "}\n";
    return cssVariables;
};


