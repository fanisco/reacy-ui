import {css} from 'styled-components';
import {Mods} from '../types';
import {getColors, conditional} from '../helpers';
import {fonts, sized, appearance, ModSizes, ModStyles} from './common';

export const input = (mods: Mods = {}) => {
  const size = ModSizes[mods.xs || mods.sm || mods.md || mods.lg || mods.xl] || ModSizes.md;
  const style = ModStyles[mods.primary || mods.secondary || mods.success || mods.warning || mods.danger] || ModStyles.primary;
  return css`
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  border: 1px solid;
  font-weight: 400;
  transition: all 0.15s ease-in-out;

  :hover { transition: all 0.15s ease-in-out 0.15s; }
  :focus { outline: 0 none; }
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
    borderDisabled,
    link,
    linkHover,
    linkActive,
    linkDisabled
  } = getColors(style);
  const {
    border,
    foreground,
    foregroundHover,
    foregroundActive,
    foregroundDisabled,
    background,
    backgroundHover,
    backgroundActive,
    backgroundDisabled
  } = getColors(-1);
  return css`
  background-color: ${background};
  border-color: ${border};
  color: ${foreground};

  :hover {
    background-color: ${background};
    border-color: ${borderHover};
    color: ${foregroundHover};
  }

  :focus {
    background: ${background};
    border-color: ${borderActive};
    color: ${foregroundActive};
    box-shadow: 0 8px 16px ${link}46,
                0 2px 4px ${link}24;
  }

  :disabled {
    cursor: default;

    &, :hover, :active:focus {
      background-color: ${backgroundDisabled};
      border-color: ${borderDisabled};
      color: ${foregroundDisabled};
    }
  }
`;
};
