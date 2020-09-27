export const modSeparator = '--';
export const bemClasses =
  ({base = '', mods = [], className}) =>
    [
      base,
      ...mods
        .filter(cl => cl)
        .map(mod => `${base}${modSeparator}${mod}`),
      className
    ]
    .filter(cl => cl)
    .join(' ');
