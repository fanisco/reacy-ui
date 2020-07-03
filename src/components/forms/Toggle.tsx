export const a = 1;
// import React from 'react';
// import styled from 'styled-components';
// import { Button } from '../buttons';
// import IInputProps from '../interface/IInputProps';
//
// interface IProps extends IInputProps {
//     values?: any[];
// }
// export const Toggle: React.FC<IProps> = ({ value, values, ...props }) => {
//     return (
//         <ToggleElement>
//             {values ?
//                 values.map((item, i) =>
//                     <Button
//                         key={i}
//                         side={getSide(i, values.length)}
//                         state={value === item.id ? true : null}
//                         onClick={() => props.onChange && props.onChange(item.id)}
//                     >{item.name || item.id}</Button>)
//                 : null}
//         </ToggleElement>
//     );
// };
//
// const ToggleElement = styled.div`
//     display: flex;
// `;
//
// const getSide = (i: number, n: number): boolean | null => {
//     switch (true) {
//         case i === 0:
//             return true;
//         case i === n - 1:
//             return false;
//         default:
//             return null;
//     }
// };
