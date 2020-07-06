import React from 'react';
import {Icons} from '../../common/interfaces';

export const Icon: React.FC<Icons.IIcon> = ({name, size = '1x', align = 'center', ...props}) => {
  return <i className={`las la-${name} la-${size} ${props.className}`} style={{alignSelf: align}}/>;
};
