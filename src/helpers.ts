import { Colors } from './constants';
import { Styles } from './enums';

export function getColors(style: Styles) {
    const colors = Colors[style];
    if (style === 'default') {
        return {
            linkColor: colors.b900,
            textColor: colors.b900,
            idleColor: colors.b100,
            bottomColor: colors.b200,
            borderLight: colors.b200,
            borderColor: colors.b300,
            shadowColor: colors.b500,

            hoverColor: colors.b200,
            activeColor: colors.b200,
            borderHover: colors.b350,
            borderActive: colors.b350
        };
    } else {
        return {
            linkColor: colors.a450,
            textColor: colors.b100,
            idleColor: colors.a350,
            bottomColor: colors.a400,
            borderLight: colors.b400,
            borderColor: colors.a450,
            shadowColor: colors.a900,

            hoverColor: colors.a400,
            activeColor: colors.a400,
            borderHover: colors.a550,
            borderActive: colors.a550
        };
    }
}
