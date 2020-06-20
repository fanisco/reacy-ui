import React from 'react';
import './Grid.scss';

const Grid = ({columns, items}) => {
  return (
    <div className="grid">
      {items.map(item => <div className="grid__cell">{item}</div>)}
    </div>
  )
}

export default Grid;
