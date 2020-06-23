import React from 'react';
import './Grid.scss';

const Grid = ({items}) => {
  return (
    <div className="grid">
      {items.map((item, i) => <div key={i} className="grid__cell">{item}</div>)}
    </div>
  )
}

export default Grid;
