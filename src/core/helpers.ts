import {Mods} from './types';
import {colors, palette} from './variables';

export const modsFromArray = (arr?: string[]): Mods | undefined => {
  if (!arr) {
    return;
  }
  const mods: Mods = {};
  for (const m of arr) {
    mods[m] = m;
  }
  return mods;
};

export const getColors = (style: number = -1): {
  foreground: string;
  foregroundHover: string;
  foregroundActive: string;
  foregroundDisabled: string;
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  backgroundDisabled: string;
  border: string;
  borderHover: string;
  borderActive: string;
  borderDisabled: string;
  link: string;
  linkHover: string;
  linkActive: string;
  linkDisabled: string;
} => {
  if (style === -1) {
    return {
      foreground: colors.d500,
      foregroundHover: colors.d500,
      foregroundActive: colors.d500,
      foregroundDisabled: colors.d500,
      background: colors.l100,
      backgroundHover: colors.l200,
      backgroundActive: colors.l200,
      backgroundDisabled: colors.l200,
      border: colors.l500,
      borderHover: colors.l500,
      borderActive: colors.l500,
      borderDisabled: colors.l500,
      link: palette[0].a400,
      linkHover: palette[0].a500,
      linkActive: palette[0].a500,
      linkDisabled: palette[0].a500
    };
  } else {
    return {
      foreground: colors.l100,
      foregroundHover: colors.l100,
      foregroundActive: colors.l100,
      foregroundDisabled: colors.l100,
      background: palette[style].a500,
      backgroundHover: palette[style].a400,
      backgroundActive: palette[style].a600,
      backgroundDisabled: colors.l500,
      border: palette[style].a400,
      borderHover: palette[style].a500,
      borderActive: palette[style].a500,
      borderDisabled: colors.l500,
      link: palette[style].a400,
      linkHover: palette[style].a500,
      linkActive: palette[style].a500,
      linkDisabled: colors.l500
    }
  }
};

export const conditional = (condition: any, a: any, b: any = '') => condition ? a : b;
