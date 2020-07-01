import {css} from 'styled-components';
import {Mods} from '../types';
import {getColors, conditional} from '../helpers';
import {fonts, sized, appearance, ModSizes, ModStyles} from './common';

export const input = (mods?: Mods) => {
  if (!mods) {
    return;
  }
  const size = ModSizes[mods.xs || mods.sm || mods.md || mods.lg || mods.xl];
  const style = ModStyles[mods.primary || mods.secondary || mods.success || mods.warning || mods.danger] || ModStyles.primary;
  return css`
${sized(size)}
${fonts(size)}
${inputStyles(style, mods)}
${appearance(mods)}
`;
};

export const inputStyles = (style: ModStyles, {}: any) => {
  const isStyle = style !== undefined;
  const {
    borderHover,
    borderActive,
    link,
    linkHover,
    linkActive
  } = getColors(style);
  const {
    border,
    foreground,
    foregroundHover,
    foregroundActive,
    background,
    backgroundHover,
    backgroundActive
  } = getColors(-1);
  return css`
  background-color: ${background};
  border-color: ${border};
  color: ${foreground}

  :hover {
    background-color: ${background};
    border-color: ${borderHover};
    color: ${foregroundHover};
  }

  :focus {
    background: ${background};
    border-color: ${borderActive};
    color: ${foregroundActive};
    box-shadow: 0 0.25em 0.5em ${borderActive}30;
  }
`;
}
