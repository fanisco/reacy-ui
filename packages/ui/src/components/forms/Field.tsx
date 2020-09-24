import React, {useState} from 'react';
import {Forms} from './interfaces';
import {Input} from './Input';
import {Checkbox} from './Checkbox';
import {Textarea} from './Textarea';
import {Select} from './Select';
import {Alert} from '../misc';
import {useBem} from '../../hooks/useBem';
import {SizeMods} from '../../common/mods';

export const Field: React.FC<Forms.IField> = ({item, errors, mods = [], ...props}) => {
  const [focused, setFocused] = useState(false);
  const cBase = 'rcy-field';
  const cName = useBem({
    cBase,
    cName: props.className,
    mods: [mods, focused && 'focused'],
    defSize: SizeMods.md
  });

  const onFocus = () => {
    setFocused(true);
  }

  const onBlur = () => {
    setFocused(false);
  }

  let input: React.ReactElement;
  switch (item.type) {
    case 'string':
    case 'number':
    case 'password':
    case 'email':
      input = <Input {...(item as Forms.IInput)} onFocus={onFocus} onBlur={onBlur} mods={[...mods]}/>;
      break;
    case 'textarea':
      input = <Textarea {...(item as Forms.IInput)} onFocus={onFocus} onBlur={onBlur} mods={[...mods]}/>;
      break;
    case 'checkbox':
      input = <Checkbox {...(item as Forms.ICheckbox)}/>;
      break;
    case 'select':
      input = <Select {...(item as Forms.ISelect)}/>;
      break;
  }
  return (
    <div className={cName}>
      {input}
      {errors ? <Alert mods={['danger']}>{errors}</Alert> : null}
    </div>
  );
};
