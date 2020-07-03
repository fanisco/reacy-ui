import React from 'react';
import {Tables} from '../../common/interfaces';

export const Table: React.FC<Tables.ITable>  = ({rows, columns, footer}) => {
  return (
    <div className="rcy-table" style={{
      gridTemplateColumns: columns.map(column => column.width || '1fr').join(' ')
    }}>
      <Header columns={columns}/>
      {rows.map((row, i) => <Row key={i} row={row} columns={columns}/>)}
      {footer ? <Footer footer={footer}/> : ''}
    </div>
  )
};

const Header: React.FC<Tables.IHeader> = ({columns}) => {
  const header: any = {};
  columns.forEach(column => header[column.id] = column.caption);
  return (
    <header className="rcy-table__header">
      {columns.map(column => <Cell row={header} column={{...column, template: undefined}}/>)}
    </header>
  );
};

const Footer: React.FC<Tables.IFooter> = ({footer}) => {
  return (
    <footer className="rcy-table__footer">
      {footer.map((footer, i) => <Cell row={footer} column={footer}/>)}
    </footer>
  );
};

const Row: React.FC<Tables.IRow> = ({row, columns}) => {
  return (
    <div className="rcy-table__row">
      {columns.map((column, i) => <Cell key={i} row={row} column={column}/>)}
    </div>
  );
};

const Cell: React.FC<Tables.ICell> = ({row, column}) => {
  return (
    <div className={`rcy-table__cell rcy-table__cell_${column.align || 'left'}`}>
      {column.template ? column.template(row, column) : row[column.id]}
    </div>
  );
};

