import React from 'react';
import {Forms} from './interfaces';
import {bemClasses, defaultSize} from '../../common/bem';
import ContentEditable from 'react-contenteditable';

export const Divarea: React.FC<Forms.IInput> = ({value, placeholder, disabled = false, ...props}) => {
  const className = bemClasses('rcy-input', defaultSize(props.mods), props.className);
  return (
    <ContentEditable
      className={className}
      html={value}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onKeyPress={props.onKeyPress}
      onChange={e => {
        if (props.onChange) {
          props.onChange(e.target.value)
        }
      }}
    />
  );
};
