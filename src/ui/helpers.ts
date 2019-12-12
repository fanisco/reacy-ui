export function getColors(style: string, colors: any) {
    if (style === 'default') {
        return {
            linkColor: colors.text,
            textColor: colors.text,
            outlineTextColor: colors.textColor,
            idleColor: colors.lights,
            idleColorBottom: colors.baseL3,
            hoverColor: colors.baseL2,
            activeColor: colors.baseL2,
            borderColor: colors.baseL0,
            borderHoverColor: colors.baseL1,
            shadowColor: colors.baseL1
        };
    } else {
        return {
            linkColor: colors.baseL2,
            textColor: colors.text,
            outlineTextColor: colors.baseL2,
            idleColor: colors.baseL2,
            idleColorBottom: colors.baseL3,
            hoverColor: colors.baseL3,
            activeColor: colors.baseL2,
            borderColor: colors.baseL0,
            borderHoverColor: colors.baseL2,
            shadowColor: colors.baseL0
        };
    }
}
