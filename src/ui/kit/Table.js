import React from 'react';
import './Table.scss';

const Table = ({rows, columns, gap}) => {
  return (
    <div
      className="table"
      style={{
        'grid-template-columns': columns.map(column => column.width || '1fr').join(' ')
      }}>
      {rows.map((row, i) => <Row key={i} row={row} columns={columns}/>)}
    </div>
  )
}

const Row = ({row, columns}) => {
  return (
    <div className="table__row">
      {columns.map((column, i) => <Cell key={i} row={row} column={column}/>)}
    </div>
  );
};

const Cell = ({row, column}) => {
  return (
    <div className="table__cell">{column.template ? column.template(row[column.id]) : row[column.id]}</div>
  );
};

export default Table;
