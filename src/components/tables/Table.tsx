export const a = 1;
// import React from 'react';
// import styled from 'styled-components';
// import {Tables} from '../core/interfaces';
//
// export const Table: React.FC<Tables.ITable>  = ({rows, columns, footer}) => {
//   return (
//     <_Table columns={columns.map(column => column.width || '1fr').join(' ')}>
//       <Header columns={columns}/>
//       {rows.map((row, i) => <Row key={i} row={row} columns={columns}/>)}
//       {footer ? <Footer footer={footer}/> : ''}
//     </_Table>
//   )
// };
//
// const _Table = styled.div<{columns: string}>`
//   display: grid;
//   grid-template-columns: ${props => props.columns};
//   grid-gap: 6px;
// `;
//
// const Header: React.FC<Tables.IHeader> = ({columns}) => {
//   const header: any = {};
//   columns.forEach(column => header[column.id] = column.caption);
//   return (
//     <_Header>
//       {columns.map(column => <Cell row={header} column={{...column, template: undefined}}/>)}
//     </_Header>
//   );
// };
//
// const _Header = styled.header`
//   display: contents;
//   font-weight: 700;
// `;
//
// const Footer: React.FC<Tables.IFooter> = ({footer}) => {
//   return (
//     <_Footer>
//       {footer.map((footer, i) => <Cell row={footer} column={footer}/>)}
//     </_Footer>
//   );
// };
//
// const _Footer = styled.footer`
//   display: contents;
// `;
//
// const Row: React.FC<Tables.IRow> = ({row, columns}) => {
//   return (
//     <_Row>
//       {columns.map((column, i) => <Cell key={i} row={row} column={column}/>)}
//     </_Row>
//   );
// };
//
// const _Row = styled.div`
//   display: contents;
// `;
//
// const Cell: React.FC<Tables.ICell> = ({row, column}) => {
//   return (
//     <_Cell align={column.align}>
//       {column.template ? column.template(row, column) : row[column.id]}
//     </_Cell>
//   );
// };
//
// const _Cell = styled.div<{align?: string}>`
//   display: flex;
//   align-items: center;
//   ${props => props.align === 'right' && 'justify-content: flex-end;'}
// `;
//
