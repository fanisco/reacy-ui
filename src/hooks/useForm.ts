import {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import {HashMap, Validator, ValidationResult} from '../common/types';

export const useForm = (names: string[], onChange?: Function, onSubmit?: Function, validators?: HashMap<Validator[]>) => {
  const [values, setValues] = useState<HashMap<string>>({});
  const [errors, setErrors] = useState<HashMap<ValidationResult[]>>({});
  const [isChanged, setIsChanged] = useState(false);

  const validate = (name: string, value: any): ValidationResult[] => {
    if (validators && validators[name]) {
      return validators[name].map(validator => validator(value)).filter(result => result !== true);
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (isChanged) {
      onChange(values);
    }
  }, [values, isChanged]);

  return {
    // Wrapped change handler
    onChange: (event: ChangeEvent<HTMLFormElement>) => {
      event.persist();
      const {name, value} = event.target;
      const result = validate(name, value);
      if (result.length) {
        setErrors({...errors, [name]: result});
      } else if (errors[name]) {
        setErrors({...errors, [name]: undefined});
      }
      setValues({...values, [name]: value});
      setIsChanged(true);
    },
    // Wrapped submit handler
    onSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newErrors = {};
      for (const name of names) {
        const result = validate(name, values[name]);
        if (result.length) {
          newErrors[name] = result;
        }
      }
      if (Object.keys(newErrors).length) {
        setErrors({...errors, ...newErrors});
        return;
      }
      if (onSubmit) {
        return onSubmit();
      }
    },
    // Object with values
    values,
    // Object with errors
    errors
  };
};
