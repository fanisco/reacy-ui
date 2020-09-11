import {modSeparator, defaultSize, defaultStyle} from '../common/bem';

export const useBem = ({
  cBase,
  cName,
  mods,
  defSize,
  defStyle
}: {
  cBase: string;
  cName: string;
  mods?: any[];
  defSize?: string;
  defStyle?: string;
}): string => {
  let result = cBase;
  if (defSize) {
    defaultSize(mods, defSize);
  }
  if (defStyle) {
    defaultStyle(mods, defStyle);
  }
  if (mods.length) {
    result += ' ' + mods.flat().filter(mod => mod).map(mod => `${cBase}${modSeparator}${mod}`).join(' ')
  }
  if (cName) {
    result += ' ' + cName;
  }
  return result;
}
