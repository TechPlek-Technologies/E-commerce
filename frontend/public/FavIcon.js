import React from 'react';
import { useSetting } from '../src/utils/setting-utils';

const FavIcon = () => {
    const favicon=useSetting("favicon");
  return (
    <div>

        <img alt={favicon ? favicon[0].name: "Logo"} src={favicon ? favicon[0].url :""}/>
      
    </div>
  )
}

export default FavIcon;
