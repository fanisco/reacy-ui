import {css} from 'styled-components';
import {Mods} from '../types';
import {fontFamily, units, sizes} from '../variables';
import {conditional} from '../helpers';

// Bundles
export enum ModSizes {
  xs, sm, md, lg, xl
}

export enum ModStyles {
  primary, secondary, success, warning, danger,
}

export const fonts = (size: ModSizes = ModSizes.md) => {
  return css`
  font-size: ${sizes.fontSize[size]}${units};
  font-family: ${fontFamily};
  line-height: ${sizes.lineHeight[size]};
`;
};

export const sized = (size: ModSizes = ModSizes.md) => {
  return css`
  height: ${sizes.elementHeight[size]}${units};
  padding: ${sizes.spacingY[size]}${units} ${sizes.spacingX[size]}${units};
  border-radius: ${sizes.borderRadius[size]}${units};
`;
};

export const appearance = (mods: Mods) => {
  return css`
  ${conditional(mods.rounded, `
  border-radius: 50px;
`)}
  ${conditional(mods.square, `
  border-radius: 0;
`)}
  ${conditional(mods.bold, `
  font-weight: 700;
`)}
  ${conditional(mods.italic, `
  font-style: italic;
`)}
  ${conditional(mods.stackedLeft, `
  border-left-width: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`)}
  ${conditional(mods.stackedRight, `
  border-right-width: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`)}
  ${conditional(mods.paddingY0, `
  padding-top: 0;
  padding-bottom: 0;
`)}
  ${conditional(mods.paddingX0, `
  padding-left: 0;
  padding-right: 0;
`)}
  ${conditional(mods.textCenter, `
  text-align: center;
  justify-content: center;
`)}
  `;
};
