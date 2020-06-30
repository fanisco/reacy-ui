import {css} from 'styled-components';
import {Mods} from '../types';
import {fonts, sized, styles, appearance, ModSizes, ModStyles} from './common';

export const button = (mods?: Mods) => {
  if (!mods) {
    return;
  }
  const size = ModSizes[mods.xs || mods.sm || mods.md || mods.lg || mods.xl];
  const style = ModStyles[mods.primary || mods.secondary || mods.success || mods.warning || mods.danger];
  return css`
${sized(size)}
${fonts(size)}
${styles(style, mods)}
${appearance(mods)}
`;
};
