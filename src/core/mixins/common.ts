import {css} from 'styled-components';
import {getColors} from '../helpers';
import {Mods} from '../types';
import {fontFamily, sizes} from '../variables';

// Bundles
export enum ModSizes {
  xs, sm, md, lg, xl
}

export enum ModStyles {
  primary, secondary, success, warning, danger,
}

export const fonts = (size: ModSizes = ModSizes.md) => {
  return css`
  font-size: ${sizes.fontSize[size]};
  font-family: ${fontFamily};
  line-height: ${sizes.lineHeight[size]};
`;
};

export const sized = (size: ModSizes = ModSizes.md) => {
  return css`
  height: ${sizes.elementHeight[size]};
  padding: ${sizes.spacingY[size]} ${sizes.spacingX[size]};
  border-radius: ${sizes.borderRadius[size]};
`;
};

export const styles = (style: ModStyles, {outline, shadow}: any) => {
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
  box-shadow: 0 0.15em 0.35em ${border}35;
  
  &:hover {
    box-shadow: 0 0.15em 0.65em ${border}65;
  }
`)}
`;
};

export const appearance = (mods: Mods) => {
  return Object.keys(mods).map(mod => {
    switch (mod) {
      case 'rounded':
        return css`border-radius: 50px`;
      case 'bold':
        return css`font-weight: bold`;
      case 'italic':
        return css`font-style: italic`;
      case 'stackedLeft':
        return css`
border-left-width: 0;
border-top-left-radius: 0;
border-bottom-left-radius: 0;`;
      case 'stackedRight':
        return css`
border-right-width: 0;
border-top-right-radius: 0;
border-bottom-right-radius: 0;`;
      case 'paddingY0':
        return css`
padding-top: 0;
padding-bottom: 0;`;
      case 'paddingX0':
        return css`
padding-left: 0;
padding-right: 0;`;
      case 'textCenter':
        return css`
text-align: center;
justify-content: center`;
    }
  });
};

const conditional = (condition: any, a: any, b: any = '') => condition ? a : b;
