import {Validator} from '../common/types';

export const isRequired: Validator = (value: string|number) => {
  if (value === undefined || value === null || value === '') {
    return 'isRequired';
  }
  return true;
};
