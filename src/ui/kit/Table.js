import React from 'react';
import './Table.scss';

const Table = ({rows, columns, gap}) => {
  return (
    <div
      className="table"
      style={{
        'grid-template-columns': columns.map(column => column.width || '1fr').join(' ')
      }}>
      <Header columns={columns}/>
      {rows.map((row, i) => <Row key={i} row={row} columns={columns}/>)}
    </div>
  )
}

const Header = ({columns}) => {
  const header = {};
  columns.forEach(column => header[column.id] = column.caption);
  return (
    <header className="table__header">
      {columns.map(column => <Cell row={header} column={{...column, template: undefined}}/>)}
    </header>
  );
};

const Row = ({row, columns}) => {
  return (
    <div className="table__row">
      {columns.map((column, i) => <Cell key={i} row={row} column={column}/>)}
    </div>
  );
};

const Cell = ({row, column}) => {
  return (
    <div className="table__cell">{column.template ? column.template(row, column) : row[column.id]}</div>
  );
};

export default Table;
