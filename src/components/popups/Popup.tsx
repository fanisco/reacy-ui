import React from 'react';
import {Popups} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';
import {Manager} from './Manager';

/**
 * Container for popup content.
 */
export const Popup: React.FC<Popups.IPopup> = ({visible, children, ...props}) => {
  const classBase = 'rcy-popup';
  const className = bemClasses(classBase, props.mods, props.className);
  const style = {};
  return Manager.render(
    <>
      {visible ? <div
        className={className}
        style={style}
      >
        <div className={`${classBase}__area`}/>
        {children}
      </div> : ''}
    </>
  );
};
