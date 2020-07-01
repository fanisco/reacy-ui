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

export const appearance = (mods: Mods) => {
  console.log(mods);
  return Object.keys(mods).map(mod => {
    console.log(mod);
    switch (mod) {
      case 'rounded':
        return css`border-radius: 50px`;
      case 'square':
        return css`border-radius: 0;`;
      case 'bold':
        return css`font-weight: bold;`;
      case 'italic':
        return css`font-style: italic;`;
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
justify-content: center;`;
      case 'inline':
        return css`
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
}`;
    }
  });
};
