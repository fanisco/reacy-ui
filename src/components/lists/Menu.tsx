export const a = 1;
// import React from 'react';
// import styled from 'styled-components';
// import { Fonts, Dims } from '../constants';
// import { Sizes, Styles } from '../enums';
// import { ListItem } from '../types/Item';
// import { getColors } from '../helpers';
// import IStyledProps from '../interface/IStyledProps';
//
// interface IProps {
//     onClick?: Function;
//     style?: Styles;
//     size?: Sizes,
//     items?: ListItem[]
// }
//
// export const Menu: React.FC<IProps> = ({ style = Styles.primary, size = Sizes.md, items, onClick}) => {
//     const colors = getColors(style);
//     const dims = Dims[size];
//     const Menu = styled.ul`
//         background: ${colors.idleColor};
//         margin: 0;
//         padding: 0;
//         list-style: none;
//         border-radius: ${dims.borderRadius}px;
//         color: ${colors.textColor}
//     `;
//     const Item = styled.li`
//         box-sizing: border-box;
//         height: ${dims.elementHeight - dims.spacing / 2}px;
//         font: ${dims.fontSize}px/${dims.lineHeight} "${Fonts.ff}";
//         font-weight: bold;
//
//         &:first-child {
//
//         }
//         &:last-child {
//
//         }
//         &:hover {
//
//         }
//     `;
//     return (
//         <Menu>
//             {items ? items.map((item, i) => {
//                 return (
//                     <Item key={i} onClick={() => onClick && onClick(item)}>
//                         <LinkElement colors={colors} dims={dims}>{item.name || item.id}</LinkElement>
//                     </Item>
//                 );
//             }) : null}
//         </Menu>
//     );
// };
//
// const LinkElement = styled.a<IStyledProps>`
//     padding: ${props => props.dims.spacing / 2}px ${props => props.dims.spacing}px;
//     display: block;
//     cursor: pointer;
//
//     &:hover {
//         background-color: ${props => props.colors.idleColor};
//     }
// `;
