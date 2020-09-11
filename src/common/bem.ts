import {SizeMods, StyleMods} from './mods';

export const modSeparator = '_';

/**
 * @deprecated
 */
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

export const defaultSize = (mods: string[] = [], mod: string = SizeMods.md): string[] => {
  if (
    mods.indexOf(SizeMods.xs) === -1 &&
    mods.indexOf(SizeMods.sm) === -1 &&
    mods.indexOf(SizeMods.md) === -1 &&
    mods.indexOf(SizeMods.lg) === -1 &&
    mods.indexOf(SizeMods.xl) === -1
  ) {
    mods.push(mod);
  }
  return mods;
};

export const defaultStyle = (mods: string[] = [], mod: string = StyleMods.primary): string[] => {
  if (
    mods.indexOf(StyleMods.primary) === -1 &&
    mods.indexOf(StyleMods.secondary) === -1 &&
    mods.indexOf(StyleMods.success) === -1 &&
    mods.indexOf(StyleMods.warning) === -1 &&
    mods.indexOf(StyleMods.danger) === -1
  ) {
    mods.push(mod);
  }
  return mods;
};

export const defaultMods = (mods: string[] = [], size: string = SizeMods.md, style: string = StyleMods.primary) =>
  defaultStyle(defaultSize(mods, size), style);

export const filterMods = (mods: string[], available: string[]): string[] =>
  mods.filter(mod => available.includes(mod));
