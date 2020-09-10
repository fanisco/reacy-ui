import React from 'react';
import {Misc} from './interfaces';

export const Icon: React.FC<Misc.IIcon> = ({name, size = '1x', align = 'center', ...props}) => {
  return <i className={`las la-${name} la-${size} ${props.className}`} style={{alignSelf: align}}/>;
};
