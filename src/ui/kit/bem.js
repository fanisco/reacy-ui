export const modSeparator = '--';
export const bemClasses =
  ({base = '', mods = [], adds = []}) =>
    [base, ...mods.map(mod => `${base}${modSeparator}${mod}`), ...adds].join(' ');
