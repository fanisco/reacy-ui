import React from 'react';
import {Icons} from '../core/interfaces';

export const Icon: React.FC<Icons.IIcon> = ({name, size = '1x', align = 'center'}) => {
  return <i className={`las la-${name} la-${size}`} style={{alignSelf: align}}/>;
};
