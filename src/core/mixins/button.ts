import {css} from 'styled-components';
import {Mods} from '../types';
import {getColors, conditional} from '../helpers';
import {fonts, sized, appearance, ModSizes, ModStyles} from './common';

export const button = (mods?: Mods) => {
  if (!mods) {
    return;
  }
  const size = ModSizes[mods.xs || mods.sm || mods.md || mods.lg || mods.xl];
  const style = ModStyles[mods.primary || mods.secondary || mods.success || mods.warning || mods.danger];
  return css`
${sized(size)}
${fonts(size)}
${buttonStyles(style, mods)}
${appearance(mods)}
`;
};

export const buttonStyles = (style: ModStyles, {outline, shadow}: any) => {
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
  color: ${foreground}

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

  ${conditional(shadow, css`
  box-shadow: 0 0.25em 1em ${border}80;
  
  &:hover {
    box-shadow: 0 0.25em 1.5em ${border}95;
  }
`)}
`;
};
