import {css} from 'styled-components';
import {Mods} from '../types';
import {getColors, conditional} from '../helpers';
import {fonts, sized, appearance, ModSizes, ModStyles} from './common';

export const button = (mods: Mods = {}) => {
  const size = ModSizes[mods.xs || mods.sm || mods.md || mods.lg || mods.xl];
  const style = ModStyles[mods.primary || mods.secondary || mods.success || mods.warning || mods.danger];
  return css`
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  font-weight: 400;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  border: 1px solid;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  :hover { transition: all 0.15s ease-in-out; }
  :focus { outline: 0 none; }
${sized(size)}
${fonts(size)}
${buttonStyles(style, mods)}
${appearance(mods)}
`;
};

export const buttonStyles = (style: ModStyles, {outline, inline, shadow}: any) => {
  const isStyle = style !== undefined;
  const {
    foreground,
    foregroundHover,
    foregroundActive,
    background,
    backgroundHover,
    backgroundActive,
    border,
    borderHover,
    borderActive,
    link,
    linkHover,
    linkActive
  } = getColors(style);
  return css`
  background-color: ${background};
  border-color: ${isStyle ? background : border};
  color: ${foreground};

  :hover {
    background-color: ${backgroundHover};
    border-color: ${isStyle ? backgroundHover : borderHover};
    color: ${foregroundHover};
  }

  :active:focus {
    background: ${backgroundActive};
    border-color: ${isStyle ? backgroundActive : borderActive};
    color: ${foregroundActive};
  }

  ${conditional(outline, css`
  background-color: transparent;
  color: ${isStyle ? link : foreground};

  :hover {
    background-color: ${isStyle ? backgroundHover + 30 : backgroundHover};
    color: ${isStyle ? linkHover : foreground};
  }
  :active:focus {
    background-color: ${isStyle ? backgroundActive + 30 : backgroundActive};
    color: ${isStyle ? linkActive : foreground};
  }
`)}

  ${conditional(inline, css`
  height: auto;
  padding: 0;
  background: none;
  border: 0 none;
  
  &:hover {
    background: none;
  }
  &:active:focus {
    background: none;
    box-shadow: none;
  }
`)}

  ${conditional(shadow, css`
  box-shadow: 0 2px 4px rgba(96, 97, 112, 0.16),
              0 0 1px rgba(40, 41, 61, 0.04);
  
  &:hover {
    box-shadow: 0 2px 4px ${border}56,
                0 0 1px ${border}34;
  }
`)}
`;
};
