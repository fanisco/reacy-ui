import React from 'react';
import {Forms} from '../../common/interfaces';
import {bemClasses} from '../../common/bem';

export const Textarea: React.FC<Forms.IInput> = ({value, name, onChange, placeholder, disabled = false, ...props}) => {
  const className = bemClasses('rcy-input', props.mods, props.className);
    return (
        <textarea className={className}
                  name={name}
                  value={value}
                  disabled={disabled}
                  placeholder={placeholder}
                  onChange={e => {
                    if (onChange) {
                      onChange(e.target.value)
                    }
                  }}
        />
    );
};
