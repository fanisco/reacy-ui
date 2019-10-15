import { Styles, Sizes } from './enums';
import * as colors from './colors.light';

export const Colors = {
    [Styles.default]: colors.defaultColors,
    [Styles.success]: colors.successColors,
    [Styles.warning]: colors.warningColors,
    [Styles.danger]: colors.dangerColors,
};

export const Fonts = {
    ff: 'Open Sans',
    mh: 1.3,
    lh: 1.5
};

type Dims = {
    font: number,
    spacing: number,
    spacings: number,
    elementPadding: number,
    elementWidth: number,
    elementHeight: number,
    borderRadius: number,
    containerWidth: number
}

const dims = (factor: number): Dims => {
    return {
        font: factor + 2,
        spacing: factor,
        spacings: factor * 0.75,
        elementPadding: factor * 2,
        elementWidth: factor * 10,
        elementHeight: factor * 3,
        borderRadius: 3,
        containerWidth: factor * 54
    }
};

export const Dims = {
    [Sizes.xs]: dims(8),
    [Sizes.sm]: dims(10),
    [Sizes.md]: dims(12),
    [Sizes.lg]: dims(16),
    [Sizes.xl]: dims(20),
};
