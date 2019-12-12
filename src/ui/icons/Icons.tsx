import React from 'react';

export const Icon: React.FC<IProps> = ({ name }) => {
    return <i className={`las la-${name}`}/>;
};

interface IProps {
    name: string;
}
