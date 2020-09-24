import React from 'react';

import {IPopupProps} from '.';
import {Popups} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

/**
 * Container for popup content.
 */
export const PopupOverlay: React.FC<Popups.IPopupOverlay & IPopupProps> = ({isOpen, onClose, children, ...props}) => {
  const classBase = 'rcy-popupOverlay';
  const className = bemClasses(classBase, props.mods, props.className);
  if (!isOpen) {
    return null;
  }
  return (
    <div className={className}>
      <div className={`${classBase}__area`} onClick={() => onClose()}/>
      <div className={`${classBase}__inner`}>{children}</div>
    </div>
  );
};
