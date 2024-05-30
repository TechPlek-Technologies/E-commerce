import { useSelector } from 'react-redux';

// Custom hook to get a specific setting
export const useSetting = (key) => {
    const { settingsData, error } = useSelector((state) => state.settings);

    if(error){
      return null;
    }
  return settingsData.settings[key];
};

export const generateCssVariables = (settingsData) => {
    
    let cssVariables = ":root {\n";
    for (const [key, value] of Object.entries(settingsData)) {
        cssVariables += `  --${key}: ${value};\n`;
    }
    cssVariables += "}\n";
    return cssVariables;
};


