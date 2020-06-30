import { Styles, Sizes } from './enums';
import * as colors from './colors.light';

export const Colors = {
    [Styles.default]: colors.primaryColors,
    [Styles.primary]: colors.primaryColors,
    [Styles.secondary]: colors.secondaryColors,
    [Styles.success]: colors.successColors,
    [Styles.danger]: colors.dangerColors
};

export const Fonts = {
    ff: 'Nunito Sans',
    mh: 1.3,
    lh: 1.5
};

type Dims = {
    fontSize: number,
    heading: number,
    lineHeight: number,
    spacing: number,
    spacings: number,
    elementPadding: number,
    elementWidth: number,
    elementHeight: number,
    borderRadius: number,
    containerWidth: number
}

const lhByFactors: { [x: number]: number } = { 16: 1.25, 14: 1.3, 12: 1.3, 10: 1.3, 8: 1.2 };

const dims = (factor: number): Dims => {
    return {
        fontSize: factor + 2,
        heading: factor * 2,
        lineHeight: lhByFactors[factor],
        spacing: factor,
        spacings: factor * 0.75,
        elementPadding: factor * 2,
        elementWidth: factor * 10,
        elementHeight: factor * 3,
        borderRadius: 3,
        containerWidth: factor * 54
    }
};

export const Dims: { [x:string]: Dims } =
    {
        [Sizes.xs]: dims(8),
        [Sizes.sm]: dims(10),
        [Sizes.md]: dims(12),
        [Sizes.lg]: dims(14),
        [Sizes.xl]: dims(16),
    };
