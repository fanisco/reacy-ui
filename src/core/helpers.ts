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
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  border: string;
  borderHover: string;
  borderActive: string;
  link: string;
  linkHover: string;
  linkActive: string;
} => {
  if (style === -1) {
    return {
      foreground: colors.b550,
      foregroundHover: colors.b900,
      foregroundActive: colors.b900,
      background: colors.b100,
      backgroundHover: colors.b250,
      backgroundActive: colors.b200,
      border: colors.b300,
      borderHover: colors.b400,
      borderActive: colors.b300,
      link: palette[0].a400,
      linkHover: palette[0].a450,
      linkActive: palette[0].a500
    };
  } else {
    return {
      foreground: colors.b100,
      foregroundHover: colors.b100,
      foregroundActive: colors.b100,
      background: palette[style].a300,
      backgroundHover: palette[style].a350,
      backgroundActive: palette[style].a400,
      border: palette[style].a400,
      borderHover: palette[style].a450,
      borderActive: palette[style].a500,
      link: palette[style].a400,
      linkHover: palette[style].a450,
      linkActive: palette[style].a500
    }
  }
};
