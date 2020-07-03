export const modSeparator = '_';
export const bemClasses = (base: string, mods?: string[], className?: string): string => {
  let result = base;
  if (mods && mods.length) {
    result += ' ' + mods.filter(mod => mod).map(mod => `${base}${modSeparator}${mod}`).join(' ');
  }
  if (className) {
    result += ` ${className}`;
  }
  return result;
};
