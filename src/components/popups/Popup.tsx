import React from 'react';
import {Popups} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {Manager} from './Manager';

/**
 * Container for popup content.
 */
export const Popup: React.FC<Popups.IPopup> = ({...props}) => {
  const classBase = 'rcy-popup';
  const className = bemClasses(classBase, props.mods, props.className);
  return Manager.render(
    <div
      className={className}
      style={{position: 'fixed', bottom: 0, left: 0, right: 0}}
    >Popup</div>
  );
};
//
// interface IStyledProps {
//     position?: string;
//     top?: number|string;
//     left?: number|string;
//     right?: number|string;
//     bottom?: number|string;
//     zIndex?: number|string;
//     width?: number|string;
//     visible?: boolean;
// }
//
// const PopupElement = styled.div<IStyledProps>`
//     position: ${props => props.position};
//     ${props => props.top !== undefined ? `top: ${props.top}` : ''}
//     ${props => props.left !== undefined ? `left: ${props.left}` : ''}
//     ${props => props.right !== undefined ? `right: ${props.right}` : ''}
//     ${props => props.bottom !== undefined ? `bottom: ${props.bottom}` : ''}
//     ${props => props.zIndex !== undefined ? `z-index: ${props.zIndex}` : ''}
//     ${props => props.width !== undefined ? `width: ${props.width}` : ''}
//     display: ${props => props.visible ? 'block' : 'none'};
// `;
//
// interface IProps extends IComponentProps, IStyledProps {
//
// }
//
// interface IState {
//     visible: boolean;
// }
//
// const escapeDiv = document.createElement('div');
