import React from 'react';
import IComponentProps from '../interface/IComponentProps';
import './H.scss';

export const H3: React.FC<IComponentProps> = ({ children }) => {
    return <h3 className="h3">{children}</h3>;
};
