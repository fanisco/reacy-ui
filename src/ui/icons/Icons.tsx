import React from 'react';

export const Icon: React.FC<IProps> = ({ name, className }) => {
    return <i className={`${className} las la-${name}`}/>;
};

interface IProps {
    name: string;
    className?: string;
}
