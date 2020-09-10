export type HashMap<T> = {
  [x: string]: T;
};

export type ValidationResult = true|string;
export type Validator = (value: any) => ValidationResult;
